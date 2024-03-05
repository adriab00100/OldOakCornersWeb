import { Link } from "gatsby";
import React from "react";
import { toKebabCase } from "../utilities/string-manipulations";
import { Container } from "./container";
import { ErrorMessage } from "./error-message";
import { Post } from "./post-types";

export type PostContentsProps = {
  post: Post;
};

export const PostContents = (props: PostContentsProps) => {
  const { post } = props;
  if (!post.html || !post.frontmatter) {
    return <ErrorMessage />;
  }
  return (
    <>
      <Container type="centering">
        <div className="post-heading">
          <h1>{post.frontmatter.title}</h1>
          <h4>
            Authored by {post.frontmatter.author} on <time>{post.frontmatter.date}</time>
          </h4>
          <ul className="post-tags">
            {(post.frontmatter.tags ?? []).map(tag => {
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
      <section className="blog-post-contents">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
    </>
  );
};
