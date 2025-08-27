// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from './src/utils/generateSidebar';
import remarkMarkmap from 'remark-markmap';

const DOCUMENT_URL = 'https://docs.vingle.kr';
const DOCUMENT_TITLE = 'vingle-backend dev docs';
const TARGET_REPOSITORY = 'vingle-backend';

// https://astro.build/config
export default defineConfig({
	site: DOCUMENT_URL,
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
			title: DOCUMENT_TITLE,
			social: [
				{ icon: 'github', label: 'GitHub', href: `https://github.com/cosmos-official/${TARGET_REPOSITORY}` },
			],
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
