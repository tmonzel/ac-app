import { stripe } from '$lib/server/stripe';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '$amplify/data/resource';
import type { FundItem } from '$lib/types';

export async function load() {
	const { data: products } = await stripe.products.list({ expand: ['data.default_price'] });
	const client = generateClient<Schema>();

	const { data: fundItems, errors } = await client.models.FundItem.list();

	const items = [];

	for (const item of fundItems) {
		const product = products.find((p) => p.id === item.stripeProductId);

		if (!item.active || !product) {
			continue;
		}

		items.push({ ...product, ...item });
	}

	return {
		items: items as FundItem[]
	};
}
