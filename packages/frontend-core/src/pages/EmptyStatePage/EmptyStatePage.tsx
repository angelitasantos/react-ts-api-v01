import { BaseStatusPage } from '../BaseStatusPage'

interface Props {
  title?: string
  description?: string
}

export function EmptyStatePage({
  title = 'Nenhum registro encontrado',
  description = 'Não há informações para exibir no momento.',
}: Props) {
  return (
    <BaseStatusPage
      title={title}
      description={description}
    />
  )
}