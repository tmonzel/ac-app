import { stripe } from '$lib/server/stripe';
import type Stripe from 'stripe';

export async function load() {
	const products = await stripe.products.list({ expand: ['data.default_price'] });

	return {
		products: products.data as (Stripe.Product & { default_price: Stripe.Price })[]
	};
}
