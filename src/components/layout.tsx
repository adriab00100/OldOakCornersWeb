import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { graphql, useStaticQuery } from "gatsby";
import React, { ReactNode } from "react";
import "../styles/global.scss";
import { SiteThemeProvider } from "../styles/theme";
import { Footer } from "./footer";
import { Header } from "./header";

export type LayoutProps = {
  children: ReactNode | ReactNode[];
};

export const Layout = (props: LayoutProps): React.JSX.Element => {
  const { children } = props;
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <SiteThemeProvider>
      <Box sx={{ width: "auto", marginLeft: "auto", marginRight: "auto" }}>
        <a className="jump-to-main" href="#maincontentstart">
          Jump to main content
        </a>
        <Header siteTitle={data.site.siteMetadata.title} />

        <Container>
          <Paper component="main" sx={{ padding: 2, marginX: { xs: -2 } }}>
            <Box justifyContent="center">
              <span id="maincontentstart" />
              {children}
            </Box>
          </Paper>
        </Container>
        <Footer />
      </Box>
    </SiteThemeProvider>
  );
};
