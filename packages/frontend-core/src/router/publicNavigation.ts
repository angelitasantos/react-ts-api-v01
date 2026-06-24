import { PUBLIC_ROUTES } from '@project/shared'
import type { NavigationItem } from '@project/ui'

export const publicLinks: NavigationItem[] = Object.values(PUBLIC_ROUTES).map(
  (route) => ({
    to: route.PATH,
    label: route.LABEL,
  }),
)