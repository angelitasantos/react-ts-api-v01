import { PublicLayout } from '../layouts/PublicLayout/PublicLayout';
import { NotFound } from '../pages/public/NotFound/NotFound';
import Home from '../modules/web-home/public-pages/Home';
import About from '../modules/web-home/public-pages/About';
import Contact from '../modules/web-home/public-pages/Contact';

export const publicRoutes = {
  path: '/',
  element: <PublicLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'contact', element: <Contact /> },
    { path: 'login', element: <NotFound /> },
  ],
};