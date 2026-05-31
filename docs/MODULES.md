# Módulos do Projeto

Este documento descreve os principais módulos funcionais da aplicação, suas responsabilidades e como eles se relacionam com o frontend e o backend.

---

## Visão geral

O projeto foi organizado em módulos para facilitar:

- separação de responsabilidades
- manutenção
- escalabilidade
- clareza na estrutura do sistema

Cada módulo representa uma área funcional da aplicação.

---

## Módulos principais

A aplicação foi planejada com os seguintes módulos:

- `web-home`
- `web-auth`
- `web-users`
- `web-manager`

---

## Módulo `web-home`

### Objetivo
Responsável pelas páginas públicas e institucionais do sistema.

### Funcionalidades
- página inicial
- página sobre
- página de contato
- apresentação do sistema

### Exemplos de telas
- `Home`
- `About`
- `Contact`

### Características
- acesso público
- não exige autenticação
- foco em navegação e apresentação

---

## Módulo `web-auth`

### Objetivo
Responsável pelo processo de autenticação e controle inicial de acesso.

### Funcionalidades
- login
- logout
- validação de credenciais
- geração de token JWT
- proteção de rotas
- persistência da sessão no frontend

### Exemplos de telas e recursos
- `Login`
- middleware de autenticação
- verificação de token
- controle de rotas privadas

### Integração com backend
Esse módulo se comunica com rotas como:

- `POST /auth/login`

---

## Módulo `web-users`

### Objetivo
Responsável pelo gerenciamento de usuários do sistema.

### Funcionalidades
- cadastro de usuários
- listagem de usuários
- busca por usuário
- edição de dados
- remoção de usuários
- controle de perfil

### Exemplos de recursos
- formulário de cadastro
- tabela de usuários
- edição de usuário
- exclusão de registro

### Integração com backend
Esse módulo se comunica com rotas como:

- `GET /users`
- `GET /users/:id`
- `POST /users`
- `PUT /users/:id`
- `DELETE /users/:id`

---

## Módulo `web-manager`

### Objetivo
Responsável pela área administrativa e pelas funcionalidades internas do sistema.

### Funcionalidades
- dashboard administrativo
- visão consolidada de dados
- gerenciamento de recursos internos
- acesso a informações estratégicas

### Exemplos de telas
- `Dashboard`
- painéis administrativos
- relatórios resumidos
- indicadores internos

### Características
- acesso restrito
- normalmente exige perfil administrativo
- depende de autenticação e autorização

### Integração com backend
Esse módulo pode consumir rotas como:

- `GET /manager/dashboard`

---

## Relação entre módulos

Os módulos não são totalmente isolados entre si, mas possuem responsabilidades bem definidas.

### Exemplo de integração

- `web-auth` controla acesso aos módulos privados
- `web-users` depende de autenticação para operações protegidas
- `web-manager` depende de autenticação e perfil administrativo
- `web-home` permanece acessível sem login

---

## Organização sugerida no frontend

```text
frontend/src/modules/
├── web-home/
├── web-auth/
├── web-users/
└── web-manager/
```

### Exemplo de organização interna

```text
frontend/src/modules/web-auth/
├── pages/
├── components/
├── services/
├── hooks/
└── types/
```

---

## Organização sugerida no backend

```text
backend/src/modules/
├── web-auth/
├── web-users/
└── web-manager/
```

### Exemplo de organização interna

```text
backend/src/modules/web-users/
├── controllers/
├── services/
├── models/
├── routes/
└── mappers/
```

---

## Benefícios da organização por módulos

- melhora a legibilidade do projeto
- facilita crescimento do sistema
- reduz acoplamento
- torna a manutenção mais previsível
- ajuda a distribuir responsabilidades com clareza

---

## Evolução futura

Novos módulos podem ser adicionados conforme o projeto evolui.

Exemplos:
- `web-profile`
- `web-settings`
- `web-reports`
- `web-notifications`

Essa abordagem ajuda a manter a estrutura escalável mesmo com o crescimento da aplicação.

---

## Resumo

Os módulos do projeto foram definidos para:

- organizar o sistema por responsabilidade funcional
- separar áreas públicas e privadas
- facilitar expansão futura
- tornar frontend e backend mais consistentes entre si
