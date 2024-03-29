import { Link } from "gatsby";
import React from "react";
import "../styles/default-layout.scss";
import "../styles/site-footer.scss";
import { Container } from "./container";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer full-width-container">
      <section className="footer-container full-width-container limited-width-container">
        <Container type="side-by-side">
          <Container type="stacked" additionalClass="site-footer-copy-container">
            <div className="copyright ">© {year} Brian Adriance</div>
            <div className="disclaimer">
              All plans and designs presented here are FREE TO USE, COPY, OR MODIFY for personal or commercial use. Images MAY NOT be shared for commercial use or use by a
              publication without consent of author/creator.
            </div>
          </Container>
          <div className="site-footer-link-container">
            <Container type="stacked">
              <Link to="/rss.xml">RSS</Link>
              <Link to="/about">About</Link>
            </Container>
          </div>
        </Container>
      </section>
    </footer>
  );
};
