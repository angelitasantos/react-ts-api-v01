import { PublicLayout, PublicRoute } from '@project/frontend-core'
import { LoginPage } from '../modules/web-auth/pages/LoginPage/LoginPage'

export const publicRoutes = {
  path: '/',
  element: <PublicLayout />,
  children: [
    {
      path: 'login',
      element: (
        <PublicRoute isAuthenticated={false}>
          <LoginPage />
        </PublicRoute>
      ),
    },
  ],
}