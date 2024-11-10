import { Box } from "@mui/system";
import { graphql, useStaticQuery } from "gatsby";
import React, { ReactNode } from "react";
import "../styles/default-layout.scss";
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
    <div className="full-width-container">
      <a className="jump-to-main" href="#maincontentstart">
        Jump to main content
      </a>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="main-content full-width-container limited-width-container">
        <Box justifyContent="center">
          <span id="maincontentstart" />
          {children}
        </Box>
      </main>
      <Footer />
    </div>
  );
};
