# Estrutura do Projeto

Este documento descreve a organização de pastas do projeto e a responsabilidade de cada diretório.

---

## Estrutura geral

```text
projeto-fullstack/
├── backend/
├── frontend/
├── docs/
├── .env.example
├── .gitignore
├── LICENSE
└── README.md
```

---

## Raiz do projeto

### `backend/`
Contém toda a aplicação servidor, incluindo API, regras de negócio, autenticação e acesso ao banco de dados.

### `frontend/`
Contém a aplicação cliente desenvolvida com React, responsável pela interface do sistema.

### `docs/`
Contém a documentação do projeto.

### `.env.example`
Arquivo de exemplo para orientar a criação das variáveis de ambiente.

### `.gitignore`
Define arquivos e pastas que não devem ser versionados.

### `LICENSE`
Arquivo com os termos de licenciamento do projeto.

### `README.md`
Documento principal com visão geral do projeto.

---

## Estrutura sugerida do backend

```text
backend/
 src/
│   ├── __tests__/
│   ├── config/
│   ├── constants/
│   ├── database/
│   ├── middlewares/
│   └── modules/
│       └── mod-name/
│           ├── controllers/
│           ├── mappers/
│           ├── models/
│           ├── routes/
│           ├── services/
│           ├── types/
│           ├── validators/
│           └── index.ts
│   ├── routes/
│   ├── types/
│   ├── utils/
│   ├── app.ts
│   └── server.ts
├── .env
├── jest.config.js
├── package.json
└── tsconfig.json
```

---

## Responsabilidade das pastas e arquivos do backend

### `src/config/`
Arquivos de configuração da aplicação.

Exemplos:
- conexão com banco
- configurações de JWT
- leitura de variáveis de ambiente

### `src/constants/`
Constantes reutilizáveis da aplicação.

Exemplos:
- mensagens padrão
- status HTTP
- permissões
- roles
- chaves fixas

### `src/database/`
Arquivos relacionados ao banco de dados.

Exemplos:
- inicialização do SQLite
- scripts de criação de tabelas
- seed de dados

### `src/middlewares/`
Contém middlewares da aplicação.

Exemplos:
- autenticação JWT
- tratamento de erros
- autorização por perfil

### `src/routes/`
Responsável pela centralização das rotas globais da aplicação.

Exemplo:
- agrupamento de módulos
- prefixos de API
- versionamento

### `src/types/`
Tipos, interfaces e contratos compartilhados.

### `src/utils/`
Funções auxiliares reutilizáveis.

### `src/app.ts`
Arquivo responsável por configurar a aplicação Express, middlewares e rotas.

### `src/server.ts`
Arquivo responsável por inicializar o servidor.

### `tests/`
Testes unitários e de integração do backend.

### `src/modules/`
Contém os módulos funcionais do sistema organizados por domínio.
Cada módulo possui sua própria estrutura interna, isolando responsabilidades e facilitando manutenção e escalabilidade.

Exemplos:
- web-home
- web-auth
- web-users
- web-manager

### Estrutura interna dos módulos

### `src/modules/mod-name/controllers/`
Responsável por receber requisições HTTP e chamar os serviços correspondentes.

Exemplo:
- `AuthController.ts`
- `UserController.ts`

### `src/modules/mod-name/mappers/`
Responsável pela transformação de dados.

Exemplos:
- converter entidade para DTO
- adaptar payloads externos

### `src/modules/mod-name/models/`
Contém os modelos ou entidades responsáveis pela interação com os dados.

Exemplo:
- `UserModel.ts`

### `src/modules/mod-name/routes/`
Define os endpoints da API e liga cada rota ao controller apropriado.

Exemplo:
- `auth.routes.ts`
- `user.routes.ts`

### `src/modules/mod-name/services/`
Contém as regras de negócio do sistema.

Exemplo:
- `AuthService.ts`
- `UserService.ts`

### `src/modules/mod-name/validators/`
Responsável pelas validações de entrada.

Exemplos:
- `commonValidator.ts`

### `src/modules/mod-name/index.ts`
Arquivo responsável por centralizar exports do módulo.

---

## Estrutura sugerida do frontend

```text
frontend/
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── contexts/
│   ├── hooks/
│   └── modules/
│       └── mod-name/
│   ├── routes/
│   ├── services/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Responsabilidade das pastas do frontend

### `src/assets/`
Arquivos estáticos da aplicação.

Exemplos:
- imagens
- ícones
- estilos globais

### `src/components/`
Componentes reutilizáveis da interface.

Exemplos:
- botões
- inputs
- cards
- navbar
- sidebar

### `src/constants/`
Constantes reutilizáveis da aplicação.

Exemplos:
- mensagens padrão
- alertas

### `src/contexts/`
Gerenciamento de estado global com Context API.

Exemplo:
- contexto de autenticação

### `src/hooks/`
Hooks customizados reutilizáveis.

### `src/modules/mod-name/`
Páginas da aplicação.

Exemplos:
- `Home.tsx`
- `About.tsx`
- `Contact.tsx`
- `Login.tsx`
- `Dashboard.tsx`

### `src/routes/`
Configuração das rotas do frontend.

Exemplos:
- rotas públicas
- rotas privadas
- proteção por autenticação

### `src/services/`
Responsável pela comunicação com a API backend.

Exemplos:
- instância do Axios
- serviços de autenticação
- serviços de usuário

### `src/types/`
Interfaces e tipos TypeScript compartilhados no frontend.

### `src/utils/`
Funções auxiliares da aplicação.

### `src/App.tsx`
Componente principal da aplicação.

### `src/main.tsx`
Ponto de entrada da aplicação React.

### `public/`
Arquivos públicos servidos diretamente pelo Vite.

---

## Organização por módulos

Uma evolução interessante para o projeto é organizar parte da estrutura por domínio funcional.

Exemplo:

```text
backend/src/modules/
├── web-auth/
│   ├── controller/
│   ├── mapper/
│   ├── model/
│   ├── routes/
│   ├── service/
│   ├── type/
│   └── validator/
├── web-users/
│   ├── controller/
│   ├── mapper/
│   ├── model/
│   ├── routes/
│   ├── service/
│   ├── type/
│   └── validator/
└── web-manager/
```

E no frontend:

```text
frontend/src/modules/
├── web-home/
├── web-auth/
├── web-users/
└── web-manager/
```

Essa abordagem ajuda bastante quando o projeto cresce.

---

## Fluxo resumido no backend

```text
routes -> controllers -> validators -> services -> mappers -> models -> database
```

---

## Fluxo resumido no frontend

```text
pages/components -> services -> API backend
```

---

## Benefícios dessa estrutura

- melhor organização do código
- separação clara de responsabilidades
- maior facilidade de manutenção
- crescimento mais previsível
- melhor reaproveitamento de componentes e serviços
- documentação mais simples para novos desenvolvedores

---

## Observação final

A estrutura apresentada é uma sugestão sólida para projetos full stack com React, Node.js, Express e TypeScript. Ela pode ser adaptada conforme a complexidade do sistema e a evolução dos módulos.
