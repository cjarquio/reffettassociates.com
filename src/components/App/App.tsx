import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import { router } from '../Navigation/Router/Router';

const theme = createTheme({
  headings: {
    // Controls --mantine-font-family-headings
    fontFamily: 'Georgia, serif',
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
