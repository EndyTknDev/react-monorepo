import { Components as MUIComponents, Theme } from "@mui/material";
import { ButtonTheme } from "./Button";
import PaperTheme from "./Paper/Paper.theme";

export const Components: MUIComponents<Omit<Theme, "components">> | undefined = {
    ...ButtonTheme,
    ...PaperTheme,
};

export default Components;

