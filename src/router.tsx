import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './components/home/HomePage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
    },
  ],
);

export { router };
