import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '$amplify/data/resource';

const client = generateClient<Schema>();

export const GET: RequestHandler = async () => {
	const { data: todos, errors } = await client.models.Todo.list();

	return json({ todos });
};
