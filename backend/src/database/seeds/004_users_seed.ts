import { db } from '../connection'
import { hashPassword } from '../../utils/hash'

export default async function usersSeed() {
  const adminPassword = await hashPassword('admin123')
  const managerPassword = await hashPassword('manager123')
  const editorPassword = await hashPassword('editor123')

  await db.run(`
    INSERT OR IGNORE INTO users (
      name,
      email,
      password,
      role_name,
      is_active,
      must_change_password
    ) VALUES
      ('Administrador', 'admin@email.com', ?, 'admin', 1, 0),
      ('Manager', 'manager@email.com', ?, 'manager', 1, 0),
      ('Editor', 'editor@email.com', ?, 'editor', 1, 0)
  `, [
    adminPassword,
    managerPassword,
    editorPassword,
  ])
}