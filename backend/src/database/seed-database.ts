import { db } from './connection';
import { DEFAULT_MESSAGE_SUCCESS, RUNNING, RUNNING_ERROR } from '../constants/index';

async function seedDatabase() {
  try {
    console.log(`${RUNNING} ...`);

    await db.run('DELETE FROM home');
    await db.run('DELETE FROM about');
    await db.run('DELETE FROM contact');
    await db.run('DELETE FROM contact_form');

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
          {
            id: 2,
            title: 'Performance',
            description: 'Aplicações rápidas e bem estruturadas.',
            icon: 'zap',
          },
          {
            id: 3,
            title: 'Escalabilidade',
            description: 'Projeto preparado para crescer com segurança.',
            icon: 'rocket',
          },
        ]),
        1,
      ],
    );

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
        'Nosso objetivo é desenvolver soluções completas, com foco em organização, clareza e evolução contínua do produto.',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
        'Nossos valores',
        JSON.stringify([
          {
            id: 1,
            title: 'Compromisso',
            description: 'Levamos qualidade e responsabilidade em cada entrega.',
            icon: 'check',
          },
          {
            id: 2,
            title: 'Inovação',
            description: 'Buscamos melhoria contínua em processos e tecnologia.',
            icon: 'lightbulb',
          },
          {
            id: 3,
            title: 'Colaboração',
            description: 'Acreditamos em trabalho conjunto para gerar melhores resultados.',
            icon: 'users',
          },
        ]),
        'Nossa missão',
        'Criar aplicações robustas, acessíveis e sustentáveis, conectando frontend e backend com boas práticas.',
        1,
      ],
    );

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
    );

    console.log(DEFAULT_MESSAGE_SUCCESS);

    process.exit(0);
  } catch (error) {
    console.error(RUNNING_ERROR, error);
    process.exit(1);
  }
}

seedDatabase();
