import "@mui/material/Paper";

declare module "@mui/material/Paper" {
    export interface PaperPropsVariantOverrides {
        clean: true;
    }
}
