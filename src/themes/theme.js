"use client";
import {createTheme, responsiveFontSizes} from "@mui/material";

import '@fontsource/inter';
import '@fontsource/museomoderno';

let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 750,
            md: 1120,
            lg: 1500,
            xl: 1920,
        },
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#5356FF',
            light: '#DFF5FF',
            dark: '#378CE7',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#378CE7',
            light: '#67C6E3',
            dark: '#004ba0',
            contrastText: '#ffffff',
        },
        highlight: {
            main: "#deb93e",
            light: '#d1b760',
            dark: '#876e1a',
            contrastText: '#ffffff',
        },
        background: {
            default: '#7E3F8F',
            paper: '#1d1d1d',
        },
        appBar: {
            defaultBackground: 'transparent',
            elevatedBackground: '#1d1d1d',
        },
        text: {
            primary: '#DFF5FF',
            secondary: '#ccf1ff',
        },
        icons: '#DFF5FF',
    },
    typography: {
        fontFamily: 'MuseoModerno, Plus Jakarta Sans, Arial, sans-serif',
        h1: {
            fontFamily: 'Inter, Arial, sans-serif',
            fontWeight: 700,
            fontSize: '2.95rem',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: '#DFF5FF',
        },
        h2: {
            fontFamily: 'MuseoModerno, Arial, sans-serif',
            fontWeight: 600,
            fontSize: '2.45rem',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: '#DFF5FF',
        },
        h3: {
            fontFamily: 'MuseoModerno, Arial, sans-serif',
            fontWeight: 600,
            fontSize: '1.75rem',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: '#DFF5FF',
        },
        h4: {
            fontFamily: 'MuseoModerno, Arial, sans-serif',
            fontWeight: 500,
            fontSize: '1.5rem',
            color: '#DFF5FF',
        },
        h5: {
            fontFamily: 'MuseoModerno, Arial, sans-serif',
            fontWeight: 400,
            fontSize: '1.2rem',
            color: '#DFF5FF',
        },
        h6: {
            fontFamily: 'MuseoModerno, Arial, sans-serif',
            fontWeight: 400,
            fontSize: '1.12rem',
            color: '#DFF5FF',
        },
        body1: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '1rem',
            color: '#F8F8F8',
        },
        body2: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '1rem',
            color: '#F8F8F8',
        },
        caption: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '0.75rem',
            color: '#b6b6b6',
        }
    },
});

theme = responsiveFontSizes(theme);

export {theme};