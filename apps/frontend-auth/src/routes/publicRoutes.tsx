import { PublicLayout, PublicRoute } from '@project/frontend-core'
import { LoginPage } from '../modules/web-auth/pages/LoginPage/LoginPage'
import Home from '../../../frontend-web/src/modules/web-home/public-pages/Home'
import About from '../../../frontend-web/src/modules/web-home/public-pages/About'
import Contact from '../../../frontend-web/src/modules/web-home/public-pages/Contact'

export const publicRoutes = {
  path: '/',
  element: <PublicLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'contact', element: <Contact /> },

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