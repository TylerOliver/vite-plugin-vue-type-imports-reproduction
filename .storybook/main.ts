import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import VueTypeImports from "vite-plugin-vue-type-imports";

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "storybook-builder-vite"
  },
  async viteFinal(config, { configType }) {
    return {
      ...config,
      resolve: {
        alias: {
          "@": `${resolve(__dirname, "../src")}`,
          // vue: "vue/dist/vue.esm-bundler.js",
          // vue: '@vue/compat/dist/vue.esm-bundler.js',
        },
        plugins: [
          vue(),
          VueTypeImports(),
        ]
      }
    }
  }
}