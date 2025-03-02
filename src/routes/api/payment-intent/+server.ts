import { stripe } from '$lib/server/stripe';
import { json } from '@sveltejs/kit';
import { type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { amount } = await request.json();

	const intent = await stripe.paymentIntents.create({
		amount,
		currency: 'eur',
		payment_method: '',
		payment_method_types: ['card', 'paypal', 'giropay'],
		return_url: 'http://localhost:5173/spenden/danke'
	});

	return json({ clientSecret: intent.client_secret });
};
