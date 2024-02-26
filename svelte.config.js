import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from 'svelte/kit';
import { preprocess } from 'svelte/compiler';

const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};

export default config;
