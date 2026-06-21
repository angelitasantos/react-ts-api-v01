import { ManagerRoute } from './ManagerRoute'
import { ManagerLayoutPage } from './ManagerLayoutPage'
import { NotFound } from '../pages/public/NotFound/NotFound'
import { ConnectionTest } from '../pages/manager/ConnectionTest/ConnectionTest'

export const managerRoutes = {
  element: <ManagerRoute />,
  children: [
    {
      path: '/manager',
      element: <ManagerLayoutPage />,
      children: [
        { index: true, element: <NotFound /> },
        { path: 'users', element: <NotFound /> },
        { path: 'reports', element: <NotFound /> },
        { path: 'connection-test', element: <ConnectionTest /> },
      ],
    },
  ],
}