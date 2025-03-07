import { stripe } from '$lib/server/stripe';
import { redirect, type RequestHandler } from '@sveltejs/kit';

const APP_URL = 'https://feature-donations.d1pdc7klc6yjkn.amplifyapp.com';

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
