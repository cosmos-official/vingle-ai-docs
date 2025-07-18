// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from './src/utils/generateSidebar';
import remarkMarkmap from 'remark-markmap';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.vingle.kr',
	markdown: {
		remarkPlugins: [
			[remarkMarkmap,
				{
					darkThemeSelector: () => document.documentElement.matches('.dark') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
				}]
		]
	},
	integrations: [
		starlight({
			title: 'Vingle dev docs',
			social: {
				github: 'https://github.com/cosmos-official/vingle-backend',
			},
			sidebar: [
				{
					label: "Home",
					link: "/",
				},
				...sidebar
			],
			components: {
				PageTitle: './src/layouts/PageTitleOverride.astro'
			},
			customCss: ['./src/styles/markmap.css']
		}),
	],
});
