import { stripe } from '$lib/server/stripe';
import { redirect, type RequestHandler } from '@sveltejs/kit';
import { APP_URL } from '$env/static/private';

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
		success_url: `${APP_URL}/spenden/danke`,
		cancel_url: `${APP_URL}/spenden`
	});

	return redirect(303, session.url!);
};
