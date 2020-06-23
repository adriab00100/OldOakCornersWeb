import React from "react";
import PropTypes from "prop-types";
import "./default-layout.scss";

const Container = ({ children, type, additionalClass }) => {

    let containerClass = "";
    switch (type) {
        case "stacked":
            containerClass = "stacked-container";
            break;
        case "side-by-side":
            containerClass = "side-by-side-container";
            break;
        case "centering":
            containerClass = "centering-container";
            break;
        default:
            throw new Error("Invalid type");
    }


    return (
        <div className={`${containerClass} ${additionalClass}`}>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
};

Container.defaultProps = {
    additionalClass: "",
};

export default Container;
