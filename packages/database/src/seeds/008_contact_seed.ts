import { databases } from '../connection/database'

const db = databases.auth

export default async function contactSeed() {
  await db.run('DELETE FROM contact')

  await db.run(
    `
    INSERT INTO contact (
      eyebrow,
      title,
      description,
      info_title,
      email,
      phone,
      address,
      is_active
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      'Contato',
      'Entre em contato com nossa equipe',
      'Se você tiver dúvidas, sugestões ou quiser falar sobre um projeto, estamos prontos para conversar.',
      'Informações de contato',
      'contato@meuprojeto.com',
      '(11) 99999-9999',
      'São Paulo - SP, Brasil',
      1,
    ],
  )
}