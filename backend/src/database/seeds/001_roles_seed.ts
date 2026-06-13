import { db } from '../connection'

export default async function rolesSeed() {
  await db.run(`
    INSERT OR IGNORE INTO roles (name, description)
    VALUES
      ('ADMIN', 'Administrador do sistema'),
      ('MANAGER', 'Gerente do sistema'),
      ('USER', 'Usuário padrão')
  `)
}