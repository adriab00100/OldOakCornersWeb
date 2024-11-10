import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

interface SiteThemeProviderProps {
  children: React.JSX.Element | React.JSX.Element[];
}

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
      MuiLink: {
        defaultProps: {
          sx: {
            color: "black",
            fontWeight: 600,

            "&:visited": {
              color: "black",
            },
          },
        },
      },
    },
    palette: {
      background: {
        default: "hsl(38, 56%, 39%)",
        paper: "hsl(31, 21%, 97%)",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
