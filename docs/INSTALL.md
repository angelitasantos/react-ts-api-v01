# Instalação do Projeto

Este documento descreve o processo de instalação, configuração e execução do projeto full stack, incluindo uma breve descrição das dependências utilizadas no frontend e no backend.

---

## Visão geral

Este projeto é uma aplicação full stack construída com:

- **Frontend:** React + TypeScript + Vite
- **Backend:** Node.js + Express + TypeScript + SQLite3
- **Autenticação:** JWT
- **Testes:** Jest
- **Arquitetura:** MVC + Programação Orientada a Objetos

---

## Estrutura esperada do projeto

```text
projeto-fullstack/
├── backend/
├── frontend/
└── docs/
```

---

## Pré-requisitos

Antes de iniciar, tenha instalado na máquina:

- **Node.js** `v18` ou superior
- **npm**
- **Git**
- editor de código, como **VS Code**

Para verificar as versões instaladas:

```bash
node -v
npm -v
git --version
```

---

## Opção 1: criar o projeto do zero

### 1. Criar pasta raiz do projeto

```bash
mkdir projeto-fullstack
cd projeto-fullstack
```

---

### 2. Criar o frontend com Vite + React + TypeScript

```bash
npm create vite@latest frontend -- --template react-ts
```

Acesse a pasta do frontend:

```bash
cd frontend
```

Instale as dependências base:

```bash
npm install
```

Instale as dependências adicionais do frontend:

```bash
npm install react-router-dom axios
```

#### Descrição das dependências do frontend

- **react-router-dom**  
  biblioteca responsável pelo roteamento no React. Permite criar navegação entre páginas como `Home`, `About`, `Contact`, `Login` e `Dashboard`.

- **axios**  
  cliente HTTP utilizado para consumir a API do backend. Facilita requisições `GET`, `POST`, `PUT` e `DELETE`.

Volte para a raiz do projeto:

```bash
cd ..
```

---

### 3. Criar o backend

Crie a pasta do backend:

```bash
mkdir backend
cd backend
```

Inicialize o projeto Node.js:

```bash
npm init -y
```

Instale as dependências principais do backend:

```bash
npm install express sqlite3 jsonwebtoken bcrypt dotenv cors helmet morgan
```

Instale as dependências de desenvolvimento:

```bash
npm install -D typescript ts-node-dev @types/node @types/express @types/jsonwebtoken @types/bcrypt @types/cors @types/morgan @types/sqlite3 jest ts-jest @types/jest supertest @types/supertest
```

Inicialize o TypeScript:

```bash
npx tsc --init
```

#### Descrição das dependências do backend

- **express**  
  framework web para criação da API REST.

- **sqlite3**  
  banco de dados relacional leve, armazenado em arquivo local.

- **jsonwebtoken**  
  biblioteca usada para geração e validação de tokens JWT.

- **bcrypt**  
  utilizada para criptografia de senhas.

- **dotenv**  
  permite carregar variáveis de ambiente a partir do arquivo `.env`.

- **cors**  
  middleware que permite comunicação entre frontend e backend.

- **helmet**  
  adiciona cabeçalhos de segurança HTTP.

- **morgan**  
  middleware de logging de requisições HTTP.

#### Descrição das dependências de desenvolvimento

- **typescript**  
  adiciona tipagem estática ao projeto.

- **ts-node-dev**  
  executa o backend em desenvolvimento com reinicialização automática.

- **@types/node**  
  tipagens do Node.js.

- **@types/express**  
  tipagens do Express.

- **@types/jsonwebtoken**  
  tipagens do JWT.

- **@types/bcrypt**  
  tipagens do bcrypt.

- **@types/cors**  
  tipagens do cors.

- **@types/morgan**  
  tipagens do morgan.

- **@types/sqlite3**  
  tipagens do sqlite3.

- **jest**  
  framework de testes.

- **ts-jest**  
  integração entre Jest e TypeScript.

- **@types/jest**  
  tipagens do Jest.

- **supertest**  
  biblioteca para testes de integração da API.

- **@types/supertest**  
  tipagens do supertest.

---

### 4. Configurar scripts do backend

No arquivo `backend/package.json`, adicione:

```json
{
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

---

### 5. Criar estrutura inicial do backend

Estrutura sugerida:

```text
backend/
├── src/
│   ├── config/
│   ├── constants/
│   ├── database/
│   ├── middlewares/
│   ├── modules/
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

### 6. Configurar variáveis de ambiente

Crie o arquivo `backend/.env`:

```env
PORT=3001
JWT_SECRET=sua_chave_secreta_aqui
JWT_EXPIRES_IN=1d
NODE_ENV=development
DB_PATH=./src/database/database.sqlite
CORS_ORIGIN=http://localhost:5173
```

---

### 7. Executar os projetos

#### Frontend

Dentro da pasta `frontend`:

```bash
npm run dev
```

#### Backend

Dentro da pasta `backend`:

```bash
npm run dev
```

---

## Opção 2: instalar a partir de um clone do projeto

Se o projeto já existir em um repositório remoto, siga os passos abaixo.

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO.git
```

Entre na pasta do projeto:

```bash
cd NOME_DO_PROJETO
```

---

### 2. Instalar dependências do frontend

```bash
cd frontend
npm install
```

> Se as dependências já estiverem listadas no `package.json`, esse comando será suficiente.

---

### 3. Instalar dependências do backend

```bash
cd ../backend
npm install
```

> Se todas as dependências já estiverem declaradas no `package.json`, não é necessário reinstalar pacote por pacote.

---

### 4. Configurar variáveis de ambiente

Crie ou ajuste o arquivo `.env` dentro da pasta `backend` com base no `.env.example`.

Exemplo:

```env
PORT=3001
JWT_SECRET=sua_chave_secreta_aqui
JWT_EXPIRES_IN=1d
NODE_ENV=development
DB_PATH=./src/database/database.sqlite
CORS_ORIGIN=http://localhost:5173
```

---

### 5. Rodar o projeto

#### Iniciar backend

```bash
cd backend
npm run dev
```

#### Iniciar frontend

Em outro terminal:

```bash
cd frontend
npm run dev
```

---

## Módulos principais do sistema

### `web-home`
Módulo responsável pelas páginas públicas:
- `Home`
- `About`
- `Contact`

### `web-auth`
Módulo responsável por:
- login
- autenticação
- geração e validação de JWT
- proteção de rotas privadas

### `web-users`
Módulo responsável por:
- cadastro
- listagem
- edição
- remoção
- permissões de acesso

### `web-manager`
Módulo responsável por:
- dashboard
- páginas administrativas
- gerenciamento interno do sistema

---

## Comandos úteis

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
npm run test:watch
npm run test:coverage
```

---

## Observações importantes

- o frontend e o backend devem rodar em portas diferentes
- o backend deve permitir a origem do frontend via CORS
- o token JWT deve ser protegido adequadamente
- o banco SQLite será criado localmente em arquivo
- arquivos `.env` não devem ser versionados
- recomenda-se manter um `.env.example` atualizado

---

## Resumo

Com esses passos, o projeto estará preparado para desenvolvimento local, com uma base organizada em:

- React + TypeScript no frontend
- Node.js + Express + SQLite3 no backend
- autenticação com JWT
- arquitetura MVC
- organização modular para crescimento futuro
