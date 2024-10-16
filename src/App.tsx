import "@mantine/core/styles.css";
import { AppShell, MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header>
          <div>Logo</div>
        </AppShell.Header>
        <AppShell.Main>Main</AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
