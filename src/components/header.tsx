import { Box, Button, Container, Link, Stack, Tooltip, Typography } from "@mui/material";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Logo = require("../images/logo.svg");

interface NavButtonProps {
  children: React.JSX.Element | React.JSX.Element[] | string;
  disabled?: boolean;
  href: string;
}

const NavButton = ({ children, disabled, href }: NavButtonProps): React.JSX.Element => {
  return (
    <Button
      disabled={disabled}
      href={href}
      variant="text"
      size="large"
      sx={{
        color: "black",
        ":hover": {
          backgroundColor: theme => theme.palette.secondary.main,
          color: theme => theme.palette.info.dark,
          outlineColor: theme => theme.palette.info.dark,
          outlineWidth: "1px",
          outlineStyle: "solid",
        },
      }}
    >
      {children}
    </Button>
  );
};

export interface HeaderProps {
  siteTitle: string;
}

export const Header = (props: HeaderProps): React.JSX.Element => {
  const { siteTitle } = props;
  return (
    <Box sx={{ backgroundColor: "hsl(39, 16%, 76%)" }}>
      <Box sx={{ paddingY: 2 }}>
        <Container>
          <Stack direction="row" spacing={2} alignContent="center">
            <Link href="/">
              <Box className="logo-container">
                <Logo />
              </Box>
            </Link>
            <Box alignContent="center">
              <Typography variant="h4">{siteTitle}</Typography>
            </Box>
            <Box component="nav" aria-label="Main site navigation" sx={{ alignContent: "center" }}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <NavButton href="/">Home</NavButton>
                <NavButton href="/blog-posts">Blog</NavButton>
                <Tooltip title="Coming soon...">
                  <Box>
                    <NavButton href="/commissions" disabled>
                      Commissions
                    </NavButton>
                  </Box>
                </Tooltip>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
