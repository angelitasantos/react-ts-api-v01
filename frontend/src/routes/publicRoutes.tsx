import { PublicLayout } from '../layouts/PublicLayout/PublicLayout';
import { NotFound } from '../pages/public/NotFound/NotFound';

export const publicRoutes = {
  path: '/',
  element: <PublicLayout />,
  children: [
    { index: true, element: <NotFound /> },
    { path: 'about', element: <NotFound /> },
    { path: 'contact', element: <NotFound /> },
    { path: 'login', element: <NotFound /> },
  ],
};