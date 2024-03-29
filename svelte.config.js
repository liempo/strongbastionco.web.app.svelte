import firebase from 'svelte-adapter-firebase'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess([{ postcss: true }])],

	kit: {
		adapter: firebase(),
		alias: {
			'@': './src'
		}
	}
}

export default config
