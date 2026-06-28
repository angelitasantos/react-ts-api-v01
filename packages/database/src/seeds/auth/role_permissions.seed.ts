import { DatabaseConnection } from '../../connection/types'
import { IdRow } from '@project/shared'

export default async function rolePermissionsSeed(db: DatabaseConnection) {
  const permissionsByRole = {
    ADMIN: [
      'manager.access',

      'users.access',
      'users.view',
      'users.create',
      'users.update',
      'users.disable',

      'profile.update',
      'password.change',

      'erp.access',
    ],

    MANAGER: [
      'manager.access',

      'users.access',
      'users.view',
      'users.create',
      'users.update',

      'profile.update',
      'password.change',
    ],

    USER: [
      'profile.update',
      'password.change',
    ],
  }

  for (const [roleName, permissions] of Object.entries(
    permissionsByRole,
  )) {
    const role = await db.get<IdRow>(
      `SELECT id FROM roles WHERE name = ?`,
      [roleName],
    )

    if (!role) {
      continue
    }

    for (const permissionName of permissions) {
      const permission = await db.get<IdRow>(
        `SELECT id FROM permissions WHERE name = ?`,
        [permissionName],
      )

      if (!permission) {
        continue
      }

      await db.run(
        `
        INSERT OR IGNORE INTO role_permissions (
          role_id,
          permission_id
        )
        VALUES (?, ?)
      `,
        [role.id, permission.id],
      )
    }
  }
}