import { TypographyOptions } from "@mui/material/styles/createTypography";
import "./typography.css";

export const Typography: TypographyOptions = {
    fontFamily: ["Inter", "Verdana", "Geneva", "Tahoma", "sans-serif"].join(","),
    h1: {
        fontSize: "48",
        fontWeight: "lighter",
    },
    h2: {
        fontSize: "40",
        fontWeight: "light",
    },
    h3: {
        fontSize: "32",
        fontWeight: "bold",
    },
    h4: {
        fontSize: "24",
        fontWeight: "bold",
    },
    h5: {
        fontSize: "20",
        fontWeight: "normal",
    },
    h6: {
        fontSize: "18",
        fontWeight: "bold",
    },
    body1: {
        fontSize: "16",
    },
    body2: {
        fontSize: "14",
    },
    subtitle1: {
        fontSize: "12",
    },
    subtitle2: {
        fontSize: "10",
    },
};

export default Typography;
