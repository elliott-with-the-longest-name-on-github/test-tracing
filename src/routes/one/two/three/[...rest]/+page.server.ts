import { error, redirect } from '@sveltejs/kit';

export const actions = {
	'great-success': async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
	},
	'throw-an-error': async () => {
		error(400, 'Something went wrong');
	},
	'redirect-to-home': async () => {
		redirect(303, '/');
	}
};
