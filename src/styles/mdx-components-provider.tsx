import { MDXProvider } from "@mdx-js/react";
import { Typography } from "@mui/material";
import React from "react";
import { ExternalLink } from "../components/external-link";

interface CustomMdxComponentProviderProps {
  children: React.JSX.Element | React.JSX.Element[] | string;
}

export const CustomMdxComponentProvider = ({ children }: CustomMdxComponentProviderProps) => {
  return (
    <MDXProvider
      components={{
        h1: props => <Typography children={props.children} paddingY={2} variant="h3" />,
        h2: props => <Typography children={props.children} paddingY={1} variant="h4" />,
        h3: props => <Typography children={props.children} paddingTop={1} paddingBottom={0.5} variant="h5" />,
        h4: props => <Typography children={props.children} paddingTop={1} paddingBottom={0.5} variant="h6" />,
        p: props => <Typography children={props.children} paddingBottom={1} variant="body1" />,
        a: props => <ExternalLink href={props.href!} children={props.children} />,
      }}
    >
      {children}
    </MDXProvider>
  );
};
