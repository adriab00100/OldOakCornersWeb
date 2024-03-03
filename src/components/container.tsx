import React from "react";
import "../styles/default-layout.scss";

export type ContainerProps = {
  children: React.ReactNode[] | React.ReactNode;
  type: "stacked" | "side-by-side" | "centering";
  additionalClass?: string;
};

export const Container = (props: ContainerProps) => {
  const { children, type, additionalClass } = props;
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

  return <div className={`${containerClass} ${additionalClass}`}>{children}</div>;
};
