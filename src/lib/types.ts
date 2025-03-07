import type Stripe from 'stripe';

export type StripeProduct = Stripe.Product & { default_price: Stripe.Price };

export interface FundItem extends StripeProduct {
	stripeProductId: string;
	stripePriceId: string;
	storageCount: number;
	storageMax: number;
	active: boolean;
}
