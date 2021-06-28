import React from "react";
import "./default-layout.scss";
import { Link } from "gatsby";
import { Frontmatter } from "./post-types";

export type PostNavigatorProps = {
  next?: { frontmatter: Frontmatter };
  previous?: { frontmatter: Frontmatter };
};

export const PostNavigator = (props: PostNavigatorProps) => {
  const { next, previous } = props;
  return (
    <nav aria-label="Previous and/or next post">
      <ul className="page-navigator">
        {next && (
          <li>
            Newer Post <br />
            <Link to={next.frontmatter.path} rel="next">
              ← {next.frontmatter.title}
            </Link>
          </li>
        )}
        {previous && (
          <li style={{ textAlign: "right" }}>
            Older Post <br />
            <Link to={previous.frontmatter.path} rel="previous">
              {previous.frontmatter.title} →
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
