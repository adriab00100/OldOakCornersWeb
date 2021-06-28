import React from "react";
import "./default-layout.scss";
import { Link } from "gatsby";
import { Post } from "./post-types";

export type PostListingProps = {
  posts: Post[];
};

export const PostListing = (props: PostListingProps) => {
  const { posts } = props;
  return (
    <section className="blog-listing">
      {posts.map(post => (
        <div key={post.id} className="post-tile-container">
          <div key={post.id} className="post-tile">
            <Link to={post.frontmatter.path}>
              <h3>{post.frontmatter.title}</h3>
            </Link>
            <small>
              {post.frontmatter.author} on {post.frontmatter.date}
            </small>
            <p>{post.excerpt}</p>
            <Link className="preview-read-more" to={post.frontmatter.path}>
              Read Post
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};
