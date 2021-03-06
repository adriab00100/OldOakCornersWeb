import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import "./default-layout.scss";

const PostListing = ({ posts }) => {

    return (
        <section className="blog-listing">
            {posts.map(post => (
                <div key={post.id} className="post-tile-container">
                    <div key={post.id} className="post-tile">
                        <Link to={post.frontmatter.path}>
                            <h3>{post.frontmatter.title}</h3>
                        </Link>
                        <small>
                            {post.frontmatter.author} on <date>{post.frontmatter.date}</date>
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

PostListing.propTypes = {
    posts: PropTypes.array.isRequired
};

export default PostListing;
