import { stripe } from '$lib/server/stripe';
import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import type Stripe from 'stripe';

export const GET: RequestHandler = async () => {
	let products: Stripe.Response<Stripe.ApiList<Stripe.Product>>;

	try {
		products = await stripe.products.list();
	} catch (err) {
		return json(err);
	}

	return json(products);
};
