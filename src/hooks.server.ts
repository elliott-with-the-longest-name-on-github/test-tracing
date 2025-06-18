export function handle({ event, resolve }) {
	console.log('handling');
	return resolve(event);
}
