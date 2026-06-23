import type { NavigationItem } from '@project/ui'
import {
  FiHome,
  FiUsers,
  FiBarChart2,
  FiDatabase,
} from 'react-icons/fi'

export const managerTopLinks: NavigationItem[] = [
  { to: '/manager', label: 'Dashboard' },
]

export const managerSidebarLinks: NavigationItem[] = [
  { to: '/manager', label: 'Dashboard', icon: FiHome },
  { to: '/manager/users', label: 'Users', icon: FiUsers },
  { to: '/manager/reports', label: 'Reports', icon: FiBarChart2 },
  { to: '/manager/connection-test', label: 'Connection Test', icon: FiDatabase },
]