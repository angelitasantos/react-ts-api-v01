# Projeto Full Stack

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-blue)
![Node.js](https://img.shields.io/badge/node-%3E%3D18-green)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?logo=react&logoColor=black)
![Express](https://img.shields.io/badge/express-000000?logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-003B57?logo=sqlite&logoColor=white)
![JWT](https://img.shields.io/badge/auth-JWT-orange)
![Tests](https://img.shields.io/badge/tests-Jest-red)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

Aplicação full stack desenvolvida com **React + TypeScript + Node.js + Express + SQLite3 + JWT + Jest**, organizada com **arquitetura MVC** e princípios de **Programação Orientada a Objetos**.

---

## Sumário

- [Visão geral](#visão-geral)
- [Status do projeto](#status-do-projeto)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Arquitetura e organização](#arquitetura-e-organização)
- [Módulos principais](#módulos-principais)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como executar](#como-executar)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Documentação](#documentação)
- [Scripts principais](#scripts-principais)
- [Boas práticas adotadas](#boas-práticas-adotadas)
- [Roadmap sugerido](#roadmap-sugerido)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## Visão geral

Este projeto foi criado para servir como base de uma aplicação full stack moderna, com separação clara entre frontend e backend, autenticação via JWT, persistência com SQLite3 e organização escalável por módulos.

A proposta é manter o código limpo, modular e fácil de evoluir.

---

## Status do projeto

> Em desenvolvimento

---

## Tecnologias utilizadas

### Backend
- Node.js
- TypeScript
- Express
- SQLite3
- JWT
- Jest
- Bcrypt
- Dotenv
- CORS
- Helmet
- Morgan

### Frontend
- React
- TypeScript
- Vite
- React Router DOM
- Axios

### Arquitetura e padrões
- MVC
- Programação Orientada a Objetos
- Organização por domínio
- Camada de serviços
- Separação entre frontend e backend

---

## Arquitetura e organização

O projeto segue uma arquitetura com separação de responsabilidades entre:

- **Routes**
- **Controllers**
- **Services**
- **Models**
- **Middlewares**

Fluxo resumido no backend:

```text
Request -> Route -> Controller -> Service -> Model -> Database -> Response
```

No frontend, a organização é feita por páginas, componentes, rotas, serviços e contextos.

Mais detalhes em:

- [Arquitetura](docs/ARCHITECTURE.md)
- [Estrutura do Projeto](docs/PROJECT-STRUCTURE.md)

---

## Módulos principais

### `web-home`
Módulo responsável pelas páginas públicas:
- Home
- About
- Contact

### `web-auth`
Módulo responsável por:
- login
- autenticação com JWT
- proteção de rotas
- controle de sessão

### `web-users`
Módulo responsável por:
- cadastro de usuários
- listagem
- edição
- remoção
- controle de acesso

### `web-manager`
Módulo responsável por:
- dashboard administrativo
- páginas privadas
- gerenciamento interno do sistema

Mais detalhes em:

- [Módulos](docs/MODULES.md)

---

## Estrutura do projeto

```text
projeto-fullstack/
├── backend/
├── frontend/
├── docs/
├── .env.example
├── .gitignore
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

---

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- **Node.js** `v18+`
- **npm**
- **Git**

Verifique com:

```bash
node -v
npm -v
git --version
```

---

## Instalação

A documentação completa de instalação está em:

- [Instalação](docs/INSTALL.md)

Resumo rápido:

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

---

## Como executar

Abra dois terminais.

### Terminal 1 - Backend

```bash
cd backend
npm install
npm run dev
```

### Terminal 2 - Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Variáveis de ambiente

Crie um arquivo `.env` na pasta `backend` com base no arquivo `.env.example`.

Exemplo:

```env
PORT=3001
JWT_SECRET=sua_chave_secreta
JWT_EXPIRES_IN=1d
NODE_ENV=development
DB_PATH=./src/database/database.sqlite
```

Mais detalhes em:

- [Variáveis de Ambiente](docs/ENVIRONMENT.md)

---

## Documentação

A documentação do projeto está organizada nos arquivos abaixo:

### Documentos principais
- [Instalação](docs/INSTALL.md)
- [Arquitetura](docs/ARCHITECTURE.md)
- [Estrutura do Projeto](docs/PROJECT-STRUCTURE.md)
- [Rotas](docs/ROUTES.md)
- [API](docs/API.md)

### Segurança e autenticação
- [Autenticação](docs/AUTH.md)
- [Segurança](docs/SECURITY.md)
- [Variáveis de Ambiente](docs/ENVIRONMENT.md)

### Dados, testes e deploy
- [Banco de Dados](docs/DATABASE.md)
- [Testes](docs/TESTS.md)
- [Deploy](docs/DEPLOY.md)

### Organização funcional
- [Módulos](docs/MODULES.md)

### Documentos complementares
- [Contribuição](CONTRIBUTING.md)
- [Código de Conduta](CODE_OF_CONDUCT.md)
- [Changelog](CHANGELOG.md)
- [Licença](LICENSE)

---

## Scripts principais

### Frontend

```bash
npm run dev
npm run build
```

### Backend

```bash
npm run dev
npm run build
npm run start
npm run test
```

---

## Dependências principais

### Frontend

- **react-router-dom**  
  Responsável pelo roteamento entre páginas.

- **axios**  
  Responsável pela comunicação com a API backend.

### Backend

- **express**  
  Framework para criação da API REST.

- **sqlite3**  
  Banco de dados local utilizado pela aplicação.

- **jsonwebtoken**  
  Responsável pela autenticação baseada em token JWT.

- **bcrypt**  
  Utilizado para geração e comparação de hash de senha.

- **dotenv**  
  Carrega variáveis de ambiente do arquivo `.env`.

- **cors**  
  Permite comunicação entre frontend e backend em origens distintas.

- **helmet**  
  Adiciona cabeçalhos HTTP de segurança.

- **morgan**  
  Exibe logs de requisições no terminal.

---

## Boas práticas adotadas

- separação de responsabilidades
- organização por módulos
- uso de variáveis de ambiente
- autenticação com JWT
- hash de senha com bcrypt
- uso de middlewares de segurança
- documentação estruturada
- base preparada para testes automatizados

---

## Roadmap sugerido

- [ ] estruturar backend com MVC
- [ ] criar módulo de autenticação
- [ ] implementar CRUD de usuários
- [ ] criar dashboard administrativo
- [ ] adicionar testes automatizados
- [ ] evoluir documentação da API
- [ ] preparar deploy
- [ ] adicionar controle de permissões por perfil

---

## Contribuição

Contribuições são bem-vindas.

Leia antes:

- [Guia de Contribuição](CONTRIBUTING.md)
- [Código de Conduta](CODE_OF_CONDUCT.md)

---

## Licença

Este projeto está licenciado conforme os termos definidos em:

- [LICENSE](LICENSE)
