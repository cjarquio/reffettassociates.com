import { AppShell, rem, Box, Container } from "@mantine/core";
import { Outlet } from "react-router-dom";
import FooterNavigation from "../FooterNavigation/FooterNavigation";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import classes from "./Root.module.css";

export const AppLayout: React.FC = () => {
  return (
    <AppShell header={{ height: rem(96) }}>
      <AppShell.Header className={classes.header}>
        <HeaderNavigation />
      </AppShell.Header>
      <Box className={classes.appMain}>
        <Outlet />
      </Box>
      <Container fluid id="footer" className={classes.footer}>
        <FooterNavigation />
      </Container>
    </AppShell>
  );
};

export default AppLayout;
