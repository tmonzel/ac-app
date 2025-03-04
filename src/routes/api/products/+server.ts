import { stripe } from '$lib/server/stripe';
import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const products = await stripe.products.list();

	return json(products);
};
