import { NotFoundPage } from '@project/frontend-core'

export const notFoundRoute = {
  path: '*',
  element: (
    <NotFoundPage
      redirectTo='/'
      redirectLabel='Voltar para Home'
    />
  ),
}