import { stripe } from '$lib/server/stripe';
import { redirect, type RequestHandler } from '@sveltejs/kit';

const DOMAIN = 'http://localhost:5173';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.formData();

	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: data.get('priceId') as string,
				quantity: 1
			}
		],
		mode: 'payment',
		success_url: `${DOMAIN}/spenden/danke`,
		cancel_url: `${DOMAIN}/spenden`
	});

	return redirect(303, session.url!);
};
