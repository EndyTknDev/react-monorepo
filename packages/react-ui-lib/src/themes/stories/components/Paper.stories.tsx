import React from "react";
import {
    Box,
    Paper,
    PaperProps,
    Typography,
} from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import "../../../types/mui-paper-overrides";

const meta: Meta<typeof Paper> = {
    component: Paper,
    title: "MUI Components/Paper",
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof Paper>;

const PaperVariantsGroupStories = (props: PaperProps) => (
    <>
        <Paper variant="elevation" {...props}><Typography>Elevation</Typography></Paper>
        <Paper variant="outlined" {...props}><Typography>Outlined</Typography></Paper>
        <Paper variant="clean" {...props}><Typography>Clean</Typography></Paper>
    </>
);

export const Variants: Story = {
    args: {
        sx: {
            padding: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            minWidth: 100,
            minHeight: 100,
        },
    },
    render: (props) => (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, max-content)",
                gridAutoFlow: "row",
                gap: "32px 24px",
            }}
        >
            <PaperVariantsGroupStories {...props} sx={{ ...props.sx, minWidth: 100, maxWidth: 100, minHeight: 100 }} />
            <PaperVariantsGroupStories {...props} sx={{ ...props.sx, minWidth: 200, minHeight: 200 }} />
        </Box>
    ),
};
