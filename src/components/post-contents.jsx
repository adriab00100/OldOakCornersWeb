import React from "react";
import PropTypes from "prop-types";
import Container from "./container";
import { Link } from "gatsby";
import { toKebabCase } from "../utilities/string-manipulations";

const PostContents = ({ post }) => {
  return (
    <>
      <Container type="centering">
        <div className="post-heading">
          <h1>{post.frontmatter.title}</h1>
          <h4>
            Authored by {post.frontmatter.author} on{" "}
            <time>{post.frontmatter.date}</time>
          </h4>
          <ul class="post-tags">
            {
            post.frontmatter.tags.map((tag) => (
              <li><Link to={`/tags/${toKebabCase(tag)}`}>{tag}</Link></li>
            ))
            }
          </ul>
        </div>
      </Container>
      <section className="blog-post-contents">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
    </>
  );
};

PostContents.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostContents;
