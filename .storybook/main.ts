import { resolve } from "path";
import VueTypeImports from "vite-plugin-vue-type-imports";

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/vue3",
  core: {
    builder: "storybook-builder-vite",
  },
  viteFinal: async (config, { configType }) => {
    config.plugins = [...config.plugins, VueTypeImports()];
    config.resolve.alias["@"] = `${resolve(__dirname, "../src")}`;
    return config;
  },
};
