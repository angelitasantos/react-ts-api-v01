import { DatabaseConnection } from '../../connection/types'

export default async function rolesSeed(db: DatabaseConnection) {
  await db.run(`
    INSERT OR IGNORE INTO roles (name, description)
    VALUES
      ('ADMIN', 'Administrador do sistema'),
      ('MANAGER', 'Gerente do sistema'),
      ('USER', 'Usuário padrão')
  `)
}