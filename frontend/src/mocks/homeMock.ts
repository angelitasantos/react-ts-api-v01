import type { HomeContent } from '../types/home';

export const homeMock: HomeContent = {
  id: 1,
  title: 'Transforme sua ideia em uma experiência digital moderna',
  subtitle: 'React + TypeScript + Node.js',
  description:
    'Uma base frontend organizada, escalável e preparada para integração com backend, autenticação e gerenciamento de conteúdo.',
  primaryButtonText: 'Conheça o projeto',
  primaryButtonLink: '/about',
  secondaryButtonText: 'Entrar em contato',
  secondaryButtonLink: '/contact',
  imageUrl:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  aboutTitle: 'Frontend preparado para crescer',
  aboutDescription:
    'Esta página foi estruturada para funcionar inicialmente com dados mockados, mas com arquitetura pronta para consumir dados reais da API no futuro.',
  aboutCardTitle: 'Pronto para o próximo passo',
  aboutCardDescription:
    'Quando o backend estiver disponível, basta substituir o mock no service por uma chamada HTTP. A interface e a tipagem já estarão preparadas.',
  highlightsTitle: 'Uma base sólida para evoluir o projeto',
  highlightsDescription:
    'Componentes organizados, fácil manutenção e estrutura pronta para crescer com novas funcionalidades.',
  highlights: [
    {
      id: 1,
      title: 'Componentização',
      description:
        'Interface dividida em componentes reutilizáveis para facilitar manutenção e evolução.',
      icon: '🧩',
    },
    {
      id: 2,
      title: 'Tipagem forte',
      description:
        'Uso de TypeScript para reduzir erros e melhorar a previsibilidade dos dados.',
      icon: '🔒',
    },
    {
      id: 3,
      title: 'Preparado para API',
      description:
        'A camada de service já está pronta para trocar dados mockados por requisições reais.',
      icon: '🚀',
    },
  ],
  isActive: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};