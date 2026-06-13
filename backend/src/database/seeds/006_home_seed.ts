import { db } from '../connection'

export default async function homeSeed() {
  await db.run('DELETE FROM home')

  await db.run(
    `
    INSERT INTO home (
      title,
      subtitle,
      description,
      primary_button_text,
      primary_button_link,
      secondary_button_text,
      secondary_button_link,
      image_url,
      about_title,
      about_description,
      about_card_title,
      about_card_description,
      highlights_title,
      highlights_description,
      highlights,
      is_active
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      'Bem-vindo ao projeto',
      'Frontend e backend integrados',
      'Este é o conteúdo inicial da Home vindo do backend.',
      'Saiba mais',
      '/about',
      'Fale conosco',
      '/contact',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      'Quem somos',
      'Somos uma equipe focada em soluções web modernas e escaláveis.',
      'Nosso diferencial',
      'Trabalhamos com organização, performance e boa experiência para o usuário.',
      'Nossos destaques',
      'Conheça alguns dos nossos principais diferenciais.',
      JSON.stringify([
        {
          id: 1,
          title: 'Qualidade',
          description: 'Código organizado e foco em boas práticas.',
          icon: 'star',
        },
      ]),
      1,
    ],
  )
}