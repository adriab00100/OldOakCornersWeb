import React from "react";
import PropTypes from "prop-types";

const ExternalLink = ({ href, children }) => {
  return (
    <a href={href} rel="external noreferrer" target="_blank">
      {children}
    </a>
  );
};

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ExternalLink;
