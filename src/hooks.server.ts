import type { Handle } from '@sveltejs/kit';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';

export const handle: Handle = async ({ event, resolve }) => {
	Amplify.configure(outputs);

	const response = await resolve(event);
	return response;
};
