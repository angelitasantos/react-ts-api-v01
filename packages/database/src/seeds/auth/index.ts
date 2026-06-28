import rolesSeed from './roles.seed'
import permissionsSeed from './permissions.seed'
import rolePermissionsSeed from './role_permissions.seed'
import usersSeed from './users.seed'
import userRolesSeed from './user_roles.seed'

export const authSeeds = [
  rolesSeed,
  permissionsSeed,
  rolePermissionsSeed,
  usersSeed,
  userRolesSeed,
]