import React from "react";

import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Themes } from "../src/themes";
import { Preview } from "@storybook/react";

export const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
        themes: {
            "Standard Light": Themes.StandardTheme.light,
            "Standard Dark": Themes.StandardTheme.dark,
        },
        defaultTheme: "Standard Light",
        Provider: ThemeProvider,
        GlobalStyles: CssBaseline,
    }),
  ],
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ebebeb',
        },
        {
          name: 'dark',
          value: 'linear-gradient(120deg, #6B00A1, #263969)',
        },
      ],
    },
  },
};

export default preview;
