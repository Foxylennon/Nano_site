import { createTheme } from "@mui/material";

export const Colors = {
    primary: "#16171aff",
    secondary: "#fffffff3",
    dark: "#000000ec",
    light: "#b8b8b8ff",
};

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        },
        light: {
            main: Colors.light
        },
    },
    typography: {
        fontFamily: "'PixelOperator', sans-serif",
        h1: {
            fontFamily: "'Pixelcraft', sans-serif",
            fontWeight: 700,
        },
        h2: {
            fontFamily: "'Pixelcraft', sans-serif",
            fontWeight: 700,
        },
        h3: {
            fontFamily: "'Pixelcraft', sans-serif",
            fontWeight: 700,
        },
        h4: {
            fontFamily: "'Pixelcraft', sans-serif",
            fontWeight: 700,
        },
        h5: {
            fontFamily: "'Pixelcraft', sans-serif",
            fontWeight: 700,
        },
        h6: {
            fontFamily: "'Pixelcraft', sans-serif",
            fontWeight: 700,
        },
        body1: {
            fontFamily: "'PixelOperator', sans-serif",
        },
        body2: {
            fontFamily: "'PixelOperator', sans-serif",
        },
        button: {
            fontFamily: "'Pixelcraft', sans-serif",
        },
    }
});

export default theme;