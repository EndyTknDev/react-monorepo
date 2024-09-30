import React from "react";
import {
    Box,
    Button,
    ButtonProps,
    Typography,
} from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import "@mui/material/Button";
import "../../../types/mui-button-overrides";
import { Delete, Password } from "@mui/icons-material";

const meta: Meta<typeof Button> = {
    component: Button,
    title: "MUI Components/Button",
    tags: ["autodocs"],
    args: {
        children: "Lorem Ipsum",
    },
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

const ButtonVariantsGroupStories = (props: ButtonProps) => (
    <>
        <Button variant="contained" {...props} />
        <Button variant="outlined" {...props} />
        <Button variant="text" {...props} />
        <Button variant="clean" {...props} />
    </>
);

export const Variants: Story = {
    render: (props) => (
        <Box
            sx={{
                display: "grid",
                gap: "32px",
                gridAutoFlow: "row",
                gridTemplateColumns: "max-content repeat(4, max-content)",
                gridTemplateAreas: "auto",
            }}
        >
            <Typography sx={{ gridColumn: 2 }} variant="body1">
                Contained
            </Typography>
            <Typography variant="body1">
                Outlined
            </Typography>
            <Typography variant="body1">
                Text
            </Typography>
            <Typography variant="body1">
                Clean
            </Typography>

            <Typography variant="body2">
                Default
            </Typography>
            <ButtonVariantsGroupStories {...props} />

            <Typography variant="body2">
                Start Icon
            </Typography>
            <ButtonVariantsGroupStories startIcon={<Delete />} {...props} />

            <Typography variant="body2">
                End Icon
            </Typography>
            <ButtonVariantsGroupStories endIcon={<Password />} {...props} />

            <Typography variant="body2">
                Disabled
            </Typography>
            <ButtonVariantsGroupStories disabled {...props} />
        </Box>
    ),
};
