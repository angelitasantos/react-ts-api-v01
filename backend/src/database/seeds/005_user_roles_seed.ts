import { db } from '../connection'
import { IdRow } from '../../shared/types/database'

export default async function userRolesSeed() {
  const admin = await db.get<IdRow>(
    `SELECT id FROM users WHERE email = ?`,
    ['admin@email.com'],
  )

  const role = await db.get<IdRow>(
    `SELECT id FROM roles WHERE name = ?`,
    ['ADMIN'],
  )

  if (!admin || !role) {
    return
  }

  await db.run(
    `
    INSERT OR IGNORE INTO user_roles (
      user_id,
      role_id
    )
    VALUES (?, ?)
  `,
    [admin.id, role.id],
  )
}