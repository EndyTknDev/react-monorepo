import "@mui/material/Button";

declare module "@mui/material/Button" {
    export interface ButtonPropsVariantOverrides {
        clean: true;
    }
}
