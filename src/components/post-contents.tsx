import { Link } from "gatsby";
import React from "react";
import { toKebabCase } from "../utilities/string-manipulations";
import { Container } from "./container";
import { Frontmatter } from "./post-types";

export type PostContentsProps = {
  frontmatter: Frontmatter;
  contents: React.ReactNode | React.ReactNode[];
};

export const PostContents = (props: PostContentsProps) => {
  const { frontmatter } = props;
  return (
    <>
      <Container type="centering">
        <div className="post-heading">
          <h1>{frontmatter.title}</h1>
          <h4>
            by {frontmatter.author} on <time>{frontmatter.date}</time>
          </h4>
          <ul className="post-tags">
            {(frontmatter.tags ?? []).map(tag => {
              return (
                tag && (
                  <li key={tag}>
                    <Link to={`/tags/${toKebabCase(tag)}`}>{tag}</Link>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </Container>
      <section className="blog-post-contents">{props.contents}</section>
    </>
  );
};
