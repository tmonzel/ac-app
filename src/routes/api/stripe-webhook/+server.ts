import { stripe } from '$lib/server/stripe';
import { json } from '@sveltejs/kit';
import { type RequestHandler } from '@sveltejs/kit';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '$amplify/data/resource';

export const POST: RequestHandler = async ({ request }) => {
	const event: any = await request.json();

	if (event.type === 'checkout.session.completed') {
		const session = event.data.object;
		const { line_items } = await stripe.checkout.sessions.retrieve(session.id, {
			expand: ['line_items']
		});

		const client = generateClient<Schema>();
		const { data: fundItems, errors } = await client.models.FundItem.list();

		if (line_items) {
			for (const item of line_items.data) {
				const fi = fundItems.find((fi) => fi.stripePriceId === item.price?.id);

				if (!fi || fi.storageCount >= fi.storageMax) {
					continue;
				}

				await client.models.FundItem.update({ ...fi, storageCount: fi.storageCount + 1 });
			}
		}
	}

	// Handle the event
	switch (event.type) {
		case 'payment_intent.succeeded':
			const paymentIntent = event.data.object;
			// Then define and call a method to handle the successful payment intent.
			// handlePaymentIntentSucceeded(paymentIntent);

			console.log(`Succeeded: payment_intent.succeeded`);
			break;
		case 'payment_method.attached':
			const paymentMethod = event.data.object;
			// Then define and call a method to handle the successful attachment of a PaymentMethod.
			// handlePaymentMethodAttached(paymentMethod);
			console.log(`Attached: payment_intent.attached`);
			break;
		// ... handle other event types
		default:
			console.log(`Unhandled event type ${event.type}`);
	}

	// Return a response to acknowledge receipt of the event
	return json({ received: true });
};
