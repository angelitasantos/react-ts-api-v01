import type { AboutContent } from '../types/about';

export const aboutMock: AboutContent = {
  id: 1,
  eyebrow: 'Sobre nós',
  title: 'Criamos interfaces modernas com foco em organização e evolução',
  description:
    'A página About apresenta a proposta do projeto, sua arquitetura e os princípios utilizados no desenvolvimento. Tudo foi pensado para ser simples de manter e fácil de expandir.',
  imageUrl:
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  valuesTitle: 'Nossos pilares',
  values: [
    {
      id: 1,
      title: 'Organização',
      description:
        'Estrutura por módulos e responsabilidades bem definidas para facilitar manutenção.',
      icon: '📁',
    },
    {
      id: 2,
      title: 'Escalabilidade',
      description:
        'Base preparada para crescer com novas páginas, autenticação e área administrativa.',
      icon: '📈',
    },
    {
      id: 3,
      title: 'Boas práticas',
      description:
        'Uso de tipagem, componentização e separação de responsabilidades no frontend.',
      icon: '✅',
    },
  ],
  missionTitle: 'Nossa missão',
  missionDescription:
    'Entregar uma experiência consistente no frontend, permitindo que a integração com o backend aconteça de forma natural no futuro, sem reescrever a interface.',
  isActive: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};