import { DatabaseConnection } from '../../connection/types'

export default async function aboutSeed(db: DatabaseConnection) {
  await db.run('DELETE FROM about')

  await db.run(
    `
    INSERT INTO about (
      eyebrow,
      title,
      description,
      image_url,
      values_title,
      values_json,
      mission_title,
      mission_description,
      is_active
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      'Sobre nós',
      'Construindo experiências digitais consistentes',
      'Nosso objetivo é desenvolver soluções completas...',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      'Nossos valores',
      JSON.stringify([]),
      'Nossa missão',
      'Criar aplicações robustas...',
      1,
    ],
  )
}