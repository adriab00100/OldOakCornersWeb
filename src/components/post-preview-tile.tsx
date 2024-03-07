import { Link } from "gatsby";
import React from "react";
import "../styles/default-layout.scss";
import { ErrorMessage } from "./error-message";
import { Post } from "./post-types";

export type PostPreviewTileProps = {
  post: Post;
};

export const PostPreviewTile = (props: PostPreviewTileProps) => {
  const { post } = props;
  if (!post?.frontmatter) {
    return <ErrorMessage />;
  }
  return (
    <div key={post.frontmatter.path} className="post-tile-container">
      <div key={post.frontmatter.path} className="post-tile">
        <Link to={post.frontmatter.path ? `/blog${post.frontmatter.path}` : "404"}>
          <h3>{post.frontmatter.title}</h3>
        </Link>
        <small>
          {post.frontmatter.author} on {post.frontmatter.date}
        </small>
        <p>{post.excerpt}</p>
        <Link className="preview-read-more" to={post.frontmatter.path ? `/blog${post.frontmatter.path}` : "404"}>
          Read Post
        </Link>
      </div>
    </div>
  );
};
