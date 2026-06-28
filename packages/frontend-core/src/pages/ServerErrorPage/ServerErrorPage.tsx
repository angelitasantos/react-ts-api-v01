import { BaseStatusPage } from '../BaseStatusPage'

interface ServerErrorPageProps {
  redirectTo?: string
  redirectLabel?: string
}

export function ServerErrorPage({
  redirectTo,
 redirectLabel,
}: ServerErrorPageProps) {
  return (
    <BaseStatusPage
      code='500'
      title='Erro interno'
      description='Ocorreu um erro inesperado.'
      buttonTo={redirectTo}
      buttonLabel={redirectLabel}
    />
  )
}