import { PublicLayout } from '../shared/layouts/PublicLayout/PublicLayout'
import { PublicRoute } from '../shared/components/PublicRoute/PublicRoute'
import { LoginPage } from '../modules/web-auth/pages/LoginPage/LoginPage'
import Home from '../modules/web-home/public-pages/Home'
import About from '../modules/web-home/public-pages/About'
import Contact from '../modules/web-home/public-pages/Contact'

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
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      ),
    },
  ],
}