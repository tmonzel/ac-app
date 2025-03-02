import { stripe } from '$lib/server/stripe';
import { json } from '@sveltejs/kit';
import { type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { priceId } = await request.json();

	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: priceId,
				quantity: 1
			}
		],
		mode: 'payment',
		ui_mode: 'embedded',
		redirect_on_completion: 'never'
	});

	return json({ clientSecret: session.client_secret });
};
