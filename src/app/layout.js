import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "@/themes/theme.js";

export const metadata = {
    title: "Launch Davis",
    description: "We are a group of innovators dedicated to transforming ideas into impactful startups that serve and empower the Davis community.",
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    }
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </body>
        </html>
    );
}
