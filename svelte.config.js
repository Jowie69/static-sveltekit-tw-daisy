import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from 'svelte/kit';

const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};

export default config;
