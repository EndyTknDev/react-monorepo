"use client"

import {
    Components,
    css,
    Theme,
} from "@mui/material";

export const MuiButtonStyleRoot = css`
    text-transform: none;
    & .MuiButtonBase-root::first-letter {
        text-transform: capitalize;
        background-color: blue;
    }
`;

export const MuiButtonStyleContained = css`
    box-shadow: none;
`;

export const MuiButtonCleanStyle = () => css`
    background: rgba(255, 255, 255, 0.15);
`;

export const ButtonTheme: Pick<Components<Omit<Theme, "components">>, "MuiButton"> = {
    MuiButton: {
        styleOverrides: {
            root: MuiButtonStyleRoot,
        },
        variants: [
            {
                props: { variant: "contained" },
                style: MuiButtonStyleContained,
            },
            {
                props: { variant: "clean" },
                style: MuiButtonCleanStyle,
            },
        ],
    },
};

export default ButtonTheme;
