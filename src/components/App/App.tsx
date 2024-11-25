import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { AppShell, Box, Container, MantineProvider, rem } from "@mantine/core";
import { HeaderNavigation, FooterNavigation } from "../Navigation";
import classes from "./App.module.css";
import { RouterProvider } from "react-router-dom";
import { router } from "../Navigation/Router/Router";

function App() {
  return (
    <MantineProvider>
      <AppShell header={{ height: rem(96) }}>
        <AppShell.Header className={classes.header}>
          <HeaderNavigation />
        </AppShell.Header>
        <Box className={classes.appMain}>
          <RouterProvider router={router} />
        </Box>
        <Container fluid id="footer" className={classes.footer}>
          <FooterNavigation />
        </Container>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
