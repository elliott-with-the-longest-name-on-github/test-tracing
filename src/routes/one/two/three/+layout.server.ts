export async function load({ parent }) {
	await parent();
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return {};
}
