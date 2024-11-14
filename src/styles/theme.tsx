import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

interface SiteThemeProviderProps {
  children: React.JSX.Element | React.JSX.Element[];
}

export const colorPalette = {
  background: {
    default: "hsl(38, 56%, 39%)",
    paper: "hsl(31, 21%, 97%)",
  },
  primary: {
    light: "#c5a380",
    main: "#4e2c09",
    dark: "#4e2c09",
    contrastText: "#fff",
  },
  secondary: {
    light: "#f8f0e1",
    main: "#eed9b4",
    dark: "#d48400",
    contrastText: "#000",
  },
  info: {
    light: "#c5a380",
    main: "#694519",
    dark: "#4e2c09",
  },
};

export const SiteThemeProvider = ({ children }: SiteThemeProviderProps): React.JSX.Element => {
  const theme = createTheme({
    components: {
      MuiContainer: {
        defaultProps: {
          sx: {
            "@media (min-width: 1200px)": {
              maxWidth: "1440px",
            },
          },
        },
      },
    },
    palette: colorPalette,
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
