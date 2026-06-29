import { ManagerRoute } from '@project/frontend-core'
import { ManagerLayoutPage } from './ManagerLayoutPage'
import { ConstructionPage } from '@project/frontend-core'

const managerConstruction = (
  <ConstructionPage
    redirectTo='/manager'
    redirectLabel='Voltar ao Painel'
  />
)

export const managerRoutes = {
  element: <ManagerRoute />,
  children: [
    {
      path: '/manager',
      element: <ManagerLayoutPage />,
      children: [
        { index: true, element: managerConstruction },
        { path: 'users', element: managerConstruction },
        { path: 'reports', element: managerConstruction },
      ],
    },
  ],
}