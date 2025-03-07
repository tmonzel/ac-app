import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
	FundItem: a
		.model({
			stripeProductId: a.string().required(),
			stripePriceId: a.string().required(),
			storageCount: a.integer().default(0).required(),
			storageMax: a.integer().required(),
			active: a.boolean().default(true)
		})
		.authorization((allow) => [allow.publicApiKey()])
});

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({
	schema,
	authorizationModes: {
		defaultAuthorizationMode: 'apiKey',
		apiKeyAuthorizationMode: { expiresInDays: 30 }
	}
});
