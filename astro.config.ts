// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';


export default defineConfig({
	site: 'https://example.com',
	integrations: [
		mdx(), 
		sitemap(),
		UnoCSS({
			injectReset: true
		}),
	],
});
