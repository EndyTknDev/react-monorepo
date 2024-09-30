"use client"

import { createTheme } from "@mui/material";
import { Typography } from "./typography";
import Components from "./components";
import Palettes from "./palettes/palettes";

export const Colors = [
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
] as const;
export type ColorType = keyof (typeof Colors)[number];

export const StandardThemeLight = createTheme({
    palette: Palettes.light,
    components: Components,
    typography: Typography,
});

export const StandardThemeDark = createTheme({
    palette: Palettes.dark,
    components: Components,
    typography: Typography,
});

export const StandardTheme = {
    dark: StandardThemeDark,
    light: StandardThemeLight,
};

export default StandardTheme;
