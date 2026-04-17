// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://waleedalikhan.github.io',
	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'viewport',
	},
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto',
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
