import { BaseStatusPage } from '../BaseStatusPage'

interface ConstructionPageProps {
  redirectTo?: string
  redirectLabel?: string
}

export function ConstructionPage({
  redirectTo,
  redirectLabel,
}: ConstructionPageProps) {
  return (
    <BaseStatusPage
      title='Página em construção'
      description='Estamos trabalhando nesta funcionalidade.'
      buttonTo={redirectTo}
      buttonLabel={redirectLabel}
    />
  )
}