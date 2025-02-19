// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from './src/utils/generateSidebar';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.vingle.kr',
	integrations: [
		starlight({
			title: 'Vingle Backend Docs',
			social: {
				github: 'https://github.com/cosmos-official/vingle-backend',
			},
			sidebar: [
				{
					label: "Home",
					link: "/",
				},
				...sidebar
			]
		})
	],
});
