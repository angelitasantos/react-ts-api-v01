import { createBrowserRouter } from 'react-router-dom';
import {
  publicRoutes,
  managerRoutes,
  notFoundRoute,
} from './routes';

export const router = createBrowserRouter([
  publicRoutes,
  managerRoutes,
  notFoundRoute,
]);