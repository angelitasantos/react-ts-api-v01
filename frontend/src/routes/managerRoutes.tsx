import { ManagerLayout } from '../layouts/ManagerLayout/ManagerLayout';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';
import { NotFound } from '../pages/public/NotFound/NotFound';
import { ConnectionTest } from '../pages/manager/ConnectionTest/ConnectionTest';

const isAuthenticated = true;

export const managerRoutes = {
  path: '/manager',
  element: (
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <ManagerLayout />
    </ProtectedRoute>
  ),
  children: [
    { index: true, element: <NotFound /> },
    { path: 'users', element: <NotFound /> },
    { path: 'reports', element: <NotFound /> },
    { path: 'connection-test', element: <ConnectionTest /> },
  ],
};