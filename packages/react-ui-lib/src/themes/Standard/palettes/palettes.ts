import { PaletteOptions } from "@mui/material";

export const light: PaletteOptions = {
    text: {
        primary: "#3C0473",
        secondary: "#3C0473",
    },
    primary: {
        main: "#6B00A1",
        light: "#9842F6",
        dark: "#3C0473",
        contrastText: "#fff",
    },
    secondary: {
        main: "#174FE2",
        light: "#0089FD",
        dark: "#410CB9",
        contrastText: "#3C0473",
    },
    success: {
        light: "#98FE00",
        main: "#61CD6F",
        dark: "#28A158",
    },
    error: {
        light: "#C45F69",
        main: "#D0214B",
        dark: "#7C122B",
    },
};

export const dark: PaletteOptions = {
    mode: "dark",
    text: {
        primary: "#fff",
        secondary: "#fff",
        disabled: "#fff",
    },
    primary: {
        main: "#3C0473",
        light: "#6B00A1",
        dark: "#30035C",
        contrastText: "#fff",
    },
    secondary: {
        main: "#174FE2",
        light: "#0089FD",
        dark: "#410CB9",
        contrastText: "#fff",
    },
    success: {
        light: "#98FE00",
        main: "#61CD6F",
        dark: "#28A158",
        contrastText: "#fff",
    },
    error: {
        light: "#C45F69",
        main: "#FE3434",
        dark: "#7C122B",
        contrastText: "#fff",
    },
    background: {
        defaultGradient: "linear-gradient(259deg, #6B00A1, #263969)",
        defaultPaper: "linear-gradient(259deg, #6B00A1, #263969)",
        default: "#6B00A1",
        paper: "#6B00A1",
    },
};

export const Palettes = {
    light,
    dark,
};

export default Palettes;
