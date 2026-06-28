import { BaseStatusPage } from '../BaseStatusPage'

interface Props {
  redirectTo?: string
  redirectLabel?: string
}

export function NotFoundPage({
  redirectTo = '/',
  redirectLabel = 'Voltar',
}: Props) {
  return (
    <BaseStatusPage
      code='404'
      title='Página não encontrada'
      description='O endereço informado não existe ou foi removido.'
      buttonTo={redirectTo}
      buttonLabel={redirectLabel}
    />
  )
}