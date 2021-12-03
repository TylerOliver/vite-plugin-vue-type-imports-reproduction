module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:vue/essential",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".vue"],
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // Vue-specific rules not included in 'plugin:vue/essential'
    // https://github.com/vuejs/eslint-plugin-vue/tree/master/docs/rules
    "vue/attribute-hyphenation": ["error", "never"],
    "vue/order-in-components": ["error"],
    // Vue 3 allows model arguments
    "vue/no-v-model-argument": [1],
    // https://v3.vuejs.org/style-guide/#component-instance-options-order-recommended
    "vue/attributes-order": [
      "error",
      {
        alphabetical: false,
        order: [
          "DEFINITION", // v-is
          "GLOBAL", // id
          ["LIST_RENDERING", "UNIQUE"], // ref, v-for, key
          "CONDITIONALS", // v-if, v-else-if, v-else, v-show, v-cloak
          "RENDER_MODIFIERS", // v-once, v-pre
          "SLOT", // v-slot, slot
          "TWO_WAY_BINDING", // v-model
          "OTHER_DIRECTIVES", // v-custom-directive
          "OTHER_ATTR", // :customProp="value"
          "EVENTS", // @click="( value ) => doTheThing( value )"
          "CONTENT", // v-text, v-html
        ],
      },
    ],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
