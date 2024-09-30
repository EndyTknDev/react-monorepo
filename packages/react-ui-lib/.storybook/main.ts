import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@chromatic-com/storybook",
    "@storybook/manager-api",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react-webpack5",
  webpackFinal: async (config) => {
    // Adiciona o loader Babel personalizado para arquivos .ts e .tsx
    config?.module?.rules?.push({
      test: /\.tsx?$/, // Corresponde a arquivos .ts e .tsx
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
      exclude: /node_modules/,
    });

    // Atualiza resolve.extensions para suportar arquivos .tsx, .ts e .js
    config?.resolve?.extensions?.push('.tsx', '.ts', '.js');

    return config;
  },
};
export default config;
