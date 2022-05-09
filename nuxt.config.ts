import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: false,
	// target: 'static',

	buildModules: ['nuxt-windicss'],

	nitro: {
		prerender: {
			routes: ['/posts/1', '/posts/2'],
		},
	},
});
