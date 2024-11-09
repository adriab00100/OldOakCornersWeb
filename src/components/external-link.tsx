import { Link } from "@mui/material";
import React from "react";

export type ExternalLinkProps = {
  href: string;
  children: React.ReactNode | React.ReactNode[];
};

export const ExternalLink = (props: ExternalLinkProps) => {
  const { href, children } = props;
  return (
    <Link href={href} rel="external noreferrer" target="_blank">
      {children}
    </Link>
  );
};
