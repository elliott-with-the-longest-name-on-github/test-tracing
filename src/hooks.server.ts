import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(
	({ event, resolve }) =>
		new Promise((resolve) => setTimeout(resolve, 1000)).then(() => resolve(event)),
	async ({ event, resolve }) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		return resolve(event);
	}
);
