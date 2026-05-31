# Rotas do Projeto

Este documento descreve a organização das rotas do sistema, tanto no **backend** quanto no **frontend**, incluindo rotas públicas, rotas privadas e responsabilidades de cada grupo.

---

## Visão geral

As rotas do projeto são divididas em:

- **rotas do backend**
- **rotas do frontend**

Essa separação ajuda a organizar melhor:

- navegação da interface
- endpoints da API
- controle de acesso
- autenticação e autorização

---

# Rotas do backend

No backend, as rotas representam os endpoints da API.

## Organização sugerida

```text
backend/src/routes/
├── index.ts
├── auth.routes.ts
├── users.routes.ts
├── manager.routes.ts
└── public.routes.ts
```

---

## Responsabilidade das rotas backend

### `index.ts`
Arquivo principal que centraliza e registra todas as rotas da aplicação.

### `auth.routes.ts`
Responsável pelas rotas de autenticação.

### `users.routes.ts`
Responsável pelas rotas de usuários.

### `manager.routes.ts`
Responsável pelas rotas administrativas.

### `public.routes.ts`
Responsável pelas rotas públicas do sistema.

---

## Exemplo de rotas backend

### Públicas

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/home` | Retorna dados da página inicial |
| GET | `/about` | Retorna informações institucionais |
| GET | `/contact` | Retorna dados de contato |
| POST | `/auth/login` | Realiza login do usuário |

---

### Protegidas

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/users` | Lista usuários |
| GET | `/users/:id` | Busca usuário por id |
| POST | `/users` | Cria usuário |
| PUT | `/users/:id` | Atualiza usuário |
| DELETE | `/users/:id` | Remove usuário |
| GET | `/manager/dashboard` | Retorna dados do dashboard |

---

## Fluxo das rotas backend

```text
Request -> Route -> Controller -> Service -> Model -> Response
```

---

## Exemplo de uso de middleware

As rotas privadas devem aplicar middleware de autenticação.

### Exemplo conceitual

```text
/users -> authMiddleware -> UserController
/manager/dashboard -> authMiddleware -> roleMiddleware('admin') -> ManagerController
```

---

# Rotas do frontend

No frontend, as rotas representam as páginas acessadas pelo usuário.

## Organização sugerida

```text
frontend/src/routes/
├── index.tsx
├── AppRoutes.tsx
├── PublicRoutes.tsx
└── PrivateRoutes.tsx
```

---

## Responsabilidade das rotas frontend

### `AppRoutes.tsx`
Arquivo principal de configuração das rotas da aplicação.

### `PublicRoutes.tsx`
Define páginas acessíveis sem autenticação.

### `PrivateRoutes.tsx`
Define páginas que exigem login.

---

## Exemplo de rotas frontend

### Públicas

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Página inicial |
| `/about` | About | Página sobre |
| `/contact` | Contact | Página de contato |
| `/login` | Login | Página de autenticação |

---

### Privadas

| Rota | Página | Descrição |
|------|--------|-----------|
| `/dashboard` | Dashboard | Área administrativa |
| `/users` | Users | Listagem de usuários |
| `/users/new` | UserCreate | Cadastro de usuário |
| `/users/:id/edit` | UserEdit | Edição de usuário |

---

## Proteção de rotas no frontend

As rotas privadas devem verificar se o usuário está autenticado.

### Fluxo esperado

```text
Usuário acessa rota privada
        ↓
Frontend verifica existência de token
        ↓
Se autenticado, permite acesso
Se não autenticado, redireciona para login
```

---

## Relação entre frontend e backend

O frontend consome as rotas backend para obter e manipular dados.

### Exemplos

- página `/login` consome `POST /auth/login`
- página `/users` consome `GET /users`
- dashboard consome `GET /manager/dashboard`

---

## Organização por módulo

As rotas podem ser agrupadas por domínio funcional.

### Backend

```text
backend/src/modules/
├── web-auth/
├── web-users/
└── web-manager/
```

### Frontend

```text
frontend/src/modules/
├── web-home/
├── web-auth/
├── web-users/
└── web-manager/
```

Essa abordagem facilita a expansão do projeto.

---

## Convenções recomendadas

### Backend
- usar substantivos nas rotas
- manter padrão REST
- evitar nomes inconsistentes
- separar rotas públicas e protegidas

### Frontend
- usar caminhos simples e previsíveis
- manter correspondência com as páginas
- proteger rotas privadas com componente específico

---

## Exemplo resumido

### Backend

```text
POST   /auth/login
GET    /users
GET    /users/:id
POST   /users
PUT    /users/:id
DELETE /users/:id
GET    /manager/dashboard
GET    /home
GET    /about
GET    /contact
```

### Frontend

```text
/ 
/about
/contact
/login
/dashboard
/users
/users/new
/users/:id/edit
```

---

## Resumo

As rotas do projeto foram organizadas para:

- separar claramente frontend e backend
- distinguir rotas públicas e privadas
- facilitar autenticação e autorização
- manter navegação e endpoints consistentes
- permitir crescimento modular do sistema
