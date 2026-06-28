import { NotFoundPage } from '@project/frontend-core'

export const notFoundRoute = {
  path: '*',
  element: (
    <NotFoundPage
      redirectTo='/manager'
      redirectLabel='Voltar ao Painel'
    />
  ),
}