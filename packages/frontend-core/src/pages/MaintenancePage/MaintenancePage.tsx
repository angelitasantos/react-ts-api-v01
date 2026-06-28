import { BaseStatusPage } from '../BaseStatusPage'

interface MaintenancePageProps {
  redirectTo?: string
  redirectLabel?: string
}

export function MaintenancePage({
  redirectTo,
  redirectLabel,
}: MaintenancePageProps) {
  return (
    <BaseStatusPage
      title='Sistema em manutenção'
      description='Estamos realizando melhorias.'
      buttonTo={redirectTo}
      buttonLabel={redirectLabel}
    />
  )
}