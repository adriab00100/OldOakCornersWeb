import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import "./default-layout.scss";

const PostNavigator = ({ next, previous }) => {
    return (
        <nav aria-label="Previous and/or next post" >
            <ul className="page-navigator">
                {next && (
                    <li>Newer Post <br />
                        <Link to={next.frontmatter.path} rel="next">← {next.frontmatter.title}</Link>
                    </li>
                )}
                {previous && (
                    <li style={{ textAlign: 'right' }}>Older Post <br />
                        <Link to={previous.frontmatter.path} rel="previous">{previous.frontmatter.title} →</Link>
                    </li>
                )}

            </ul>
        </nav >
    );
};

PostNavigator.propTypes = {
    next: PropTypes.object,
    previous: PropTypes.object
};

export default PostNavigator;