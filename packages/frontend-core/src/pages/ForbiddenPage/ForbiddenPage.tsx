import { BaseStatusPage } from '../BaseStatusPage'

interface ForbiddenPageProps {
  redirectTo?: string
  redirectLabel?: string
}

export function ForbiddenPage({
  redirectTo,
  redirectLabel,
}: ForbiddenPageProps) {
  return (
    <BaseStatusPage
      code='403'
      title='Acesso negado'
      description='Você não possui permissão para acessar este recurso.'
      buttonTo={redirectTo}
      buttonLabel={redirectLabel}
    />
  )
}