import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { analyzer } from 'vite-bundle-analyzer';

export default defineConfig({
	plugins: [analyzer(), sveltekit()],
	server: {
		fs: {
			strict: false
		}
	}
});
