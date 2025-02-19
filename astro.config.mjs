// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from './src/utils/generateSidebar';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.vingle.kr',
	integrations: [
		starlight({
			editLink: {
				baseUrl: 'https://github.com/cosmos-official/vingle-backend/edit/dev/docs',
			},
			title: 'Vingle Backend Docs',
			social: {
				github: 'https://github.com/cosmos-official/vingle-backend',
			},
			sidebar: sidebar
		})
	],
});
