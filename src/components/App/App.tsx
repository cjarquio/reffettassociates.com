import "@mantine/core/styles.css";
import { AppShell, MantineProvider } from "@mantine/core";
import { HeaderNavigation } from "../Navigation";
import classes from "./App.module.css";

function App() {
  return (
    <MantineProvider>
      <AppShell
        footer={{ height: 60 }}
        padding="md"
      >
        <AppShell.Header className={classes.header}>
          <HeaderNavigation />
        </AppShell.Header>
        <AppShell.Main>Main</AppShell.Main>
        <AppShell.Footer>Footer</AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
