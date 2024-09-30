"use client";

import { css, Theme } from "@emotion/react";
import { Components } from "@mui/material";

export const PaperCleanStyle = css`
    background-color: #fff5;
`;

export const PaperTheme: Pick<Components<Omit<Theme, "components">>, "MuiPaper"> = {
    MuiPaper: {
        variants: [
            {
                props: { variant: "clean" },
                style: PaperCleanStyle,
            },
        ],
    },
};

export default PaperTheme;
