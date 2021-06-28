import React from "react";

export type ExternalLinkProps = {
  href: string;
  children: React.ReactNode | React.ReactNode[];
};

export const ExternalLink = (props: ExternalLinkProps) => {
  const { href, children } = props;
  return (
    <a href={href} rel="external noreferrer" target="_blank">
      {children}
    </a>
  );
};
