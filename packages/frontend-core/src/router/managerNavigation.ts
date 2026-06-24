import { MANAGER_ROUTES } from '@project/shared'
import type { NavigationItem } from '@project/ui'
import {
  FiHome,
  FiUsers,
  FiBarChart2,
  FiDatabase,
} from 'react-icons/fi'

export const managerTopLinks: NavigationItem[] = [
  {
    to: MANAGER_ROUTES.DASHBOARD.PATH,
    label: MANAGER_ROUTES.DASHBOARD.LABEL,
  },
]

const sidebarConfig = [
  { route: MANAGER_ROUTES.DASHBOARD, icon: FiHome },
  { route: MANAGER_ROUTES.USERS, icon: FiUsers },
  { route: MANAGER_ROUTES.REPORTS, icon: FiBarChart2 },
  { route: MANAGER_ROUTES.CONNECTION_TEST, icon: FiDatabase },
]

export const managerSidebarLinks = sidebarConfig.map(({ route, icon }) => ({
  to: route.PATH,
  label: route.LABEL,
  icon,
}))