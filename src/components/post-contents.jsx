
import React from "react";
import PropTypes from "prop-types";
import Container from "./container";

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
