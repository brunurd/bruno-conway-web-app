import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { router } from './router';
import { theme } from './ui/theme';
import { GlobalReset } from './ui/components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalReset />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export { App };
