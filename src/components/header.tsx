import { Link } from "gatsby";
import React from "react";
import "../styles/site-header.scss";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Logo = require("../images/logo.svg");

export type HeaderProps = {
  siteTitle: string;
};

export const Header = (props: HeaderProps) => {
  const { siteTitle } = props;
  return (
    <header className="site-header full-width-container">
      <div className="full-width-container limited-width-container site-header-logo-and-title">
        <Link to="/">
          <div className="logo-container">
            <Logo />
          </div>
        </Link>
        <h1 className="site-header-title">{siteTitle}</h1>
        <nav className="site-navigation" aria-label="Main site navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog-posts">Blog</Link>
            </li>
            <li>
              <Link to="/commissions">Commissions</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
