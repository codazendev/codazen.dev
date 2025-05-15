import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from 'svelte-preprocess';

const config = {
    preprocess: [sveltePreprocess(), mdsvex({ extensions: ['.svx', '.md'] })],
    kit: { adapter: adapter() },
    extensions: ['.svelte', '.svx', '.md']
};

export default config;
