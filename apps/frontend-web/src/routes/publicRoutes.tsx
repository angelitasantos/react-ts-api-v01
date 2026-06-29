import { PublicLayout } from '@project/frontend-core'
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
  ],
}