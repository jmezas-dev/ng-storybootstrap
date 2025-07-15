import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/app/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  },
  //configure for webpack bootstrap sass config
  "webpackFinal": async (config) => {
    // Encuentra y elimina la regla existente de scss si existe
    if (config.module?.rules) {
      const sassRule = {
        test: /\.scss$/,
        use: ['resolve-url-loader'].concat(
          config.module.rules
            .find((rule) => rule.test?.toString().includes('scss'))
            ?.use || []
        ),
        include: /src/,
      };

      config.module.rules.push(sassRule);
    }

      return config;
  }
};
export default config;
