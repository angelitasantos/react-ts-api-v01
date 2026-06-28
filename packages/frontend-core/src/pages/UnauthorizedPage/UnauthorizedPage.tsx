import { BaseStatusPage } from '../BaseStatusPage'

interface UnauthorizedPageProps {
  redirectTo?: string
  redirectLabel?: string
}

export function UnauthorizedPage({
  redirectTo,
  redirectLabel,
}: UnauthorizedPageProps) {
  return (
    <BaseStatusPage
      code='401'
      title='Não autenticado'
      description='Faça login para continuar.'
      buttonTo={redirectTo}
      buttonLabel={redirectLabel}
    />
  )
}