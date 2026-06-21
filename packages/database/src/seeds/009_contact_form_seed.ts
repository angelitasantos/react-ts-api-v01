import { databases } from '../connection/database'

const db = databases.auth

export default async function contactFormSeed() {
  await db.run('DELETE FROM contact_form')

  await db.run(
    `
    INSERT INTO contact_form (
      name,
      email,
      subject,
      message,
      category,
      status
    ) VALUES (?, ?, ?, ?, ?, ?)
    `,
    [
      'João Silva',
      'joao@email.com',
      'Dúvida sobre orçamento',
      'Gostaria de solicitar um orçamento para desenvolvimento de sistema.',
      'commercial',
      'pending',
    ],
  )

  await db.run(
    `
    INSERT INTO contact_form (
      name,
      email,
      subject,
      message,
      category,
      status,
      answered_at,
      assigned_to
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      'Maria Oliveira',
      'maria@email.com',
      'Suporte técnico',
      'Estou com dificuldades para acessar minha conta.',
      'support',
      'answered',
      new Date().toISOString(),
      'admin@email.com',
    ],
  )

  await db.run(
    `
    INSERT INTO contact_form (
      name,
      email,
      subject,
      message,
      category,
      status,
      assigned_to,
      answered_at,
      closed_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      'Pedro Santos',
      'pedro@email.com',
      'Parceria',
      'Gostaria de conversar sobre uma possível parceria.',
      'partnership',
      'closed',
      'manager@email.com',
      new Date().toISOString(),
      new Date().toISOString(),
    ],
  )
}