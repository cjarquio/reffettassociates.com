import "@mantine/core/styles.css";
import { AppShell, MantineProvider, rem } from "@mantine/core";
import { HeaderNavigation } from "../Navigation";
import classes from "./App.module.css";
import { RouterProvider } from "react-router-dom";
import { router } from "../Navigation/Router/Router";

function App() {
  return (
    <MantineProvider>
      <AppShell
        header={{ height: rem(96) }}
        footer={{ height: 60 }}
        padding="md"
      >
        <AppShell.Header className={classes.header}>
          <HeaderNavigation />
        </AppShell.Header>
        <AppShell.Main>
          <RouterProvider router={router} />
        </AppShell.Main>
        <AppShell.Footer>Footer</AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
