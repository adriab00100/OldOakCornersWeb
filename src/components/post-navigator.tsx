import { Link } from "gatsby";
import React from "react";
import "./default-layout.scss";
import { Frontmatter } from "./post-types";

export type PostNavigatorProps = {
  next?: Frontmatter | null;
  previous?: Frontmatter | null;
};

export const PostNavigator = (props: PostNavigatorProps) => {
  const { next, previous } = props;
  return (
    <nav aria-label="Previous and/or next post">
      <ul className="page-navigator">
        {next && next.path && (
          <li>
            Newer Post <br />
            <Link to={next.path} rel="next">
              ← {next.title ?? "Next"}
            </Link>
          </li>
        )}
        {previous && previous.path && (
          <li style={{ textAlign: "right" }}>
            Older Post <br />
            <Link to={previous.path} rel="previous">
              {previous.title ?? "Previous"} →
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
