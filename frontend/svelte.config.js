import adapter from "@sveltejs/adapter-netlify";
import preprocess from "svelte-preprocess";
import nodePolyfills from "rollup-plugin-polyfill-node";
const production = false;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app
      split: false,
    }),
    vite: {
      plugins: [
        // ↓ Needed for development mode
        !production &&
          nodePolyfills({
            include: [
              "node_modules/**/*.js",
              new RegExp("node_modules/.vite/.*js"),
            ],
          }),
      ],
      build: {
        rollupOptions: {
          plugins: [
            // ↓ Needed for build
            nodePolyfills(),
          ],
        },
        // ↓ Needed for build if using WalletConnect and other providers
        commonjsOptions: {
          transformMixedEsModules: true,
        },
      },
    },
  },
};

export default config;
