import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './components/home/HomePage';
import { NotFoundPage } from './components/notFound/NotFoundPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
);

export { router };
