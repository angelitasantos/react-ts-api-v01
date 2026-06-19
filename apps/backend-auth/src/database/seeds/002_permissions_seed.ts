import { db } from '../connection'

export default async function permissionsSeed() {
  await db.run(`
    INSERT OR IGNORE INTO permissions (
      name,
      description
    )
    VALUES
      ('manager.access', 'Acesso administrativo'),

      ('users.access', 'Acesso ao módulo usuários'),
      ('users.view', 'Visualizar usuários'),
      ('users.create', 'Criar usuários'),
      ('users.update', 'Editar usuários'),
      ('users.disable', 'Desativar usuários'),

      ('profile.update', 'Editar perfil'),
      ('password.change', 'Trocar senha'),

      ('erp.access', 'Acesso ERP')
  `)
}