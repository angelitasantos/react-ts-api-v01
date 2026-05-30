# API do Projeto

Este documento descreve a API backend da aplicação, incluindo os principais endpoints, formato de requisições, respostas esperadas e regras de autenticação.

---

## Visão geral

A API foi desenvolvida com:

- Node.js
- Express
- TypeScript
- SQLite3
- JWT

Ela é responsável por:

- autenticação de usuários
- gerenciamento de usuários
- suporte aos módulos administrativos
- fornecimento de dados para o frontend

---

## Base URL

Em ambiente local, a API pode ser acessada em:

```text
http://localhost:3001
```

> Ajuste a porta conforme a configuração do arquivo `.env`.

---

## Formato de dados

A API utiliza **JSON** para envio e recebimento de dados.

### Exemplo de header

```http
Content-Type: application/json
```

---

## Autenticação

As rotas protegidas exigem token JWT no cabeçalho da requisição.

### Header esperado

```http
Authorization: Bearer <token>
```

---

## Status codes mais comuns

| Código | Significado |
|--------|-------------|
| 200 | Requisição realizada com sucesso |
| 201 | Recurso criado com sucesso |
| 400 | Requisição inválida |
| 401 | Não autenticado |
| 403 | Acesso negado |
| 404 | Recurso não encontrado |
| 500 | Erro interno do servidor |

---

## Endpoints

# Autenticação

## `POST /auth/login`

Realiza o login do usuário e retorna um token JWT.

### Request

```json
{
  "email": "usuario@email.com",
  "password": "123456"
}
```

### Response `200`

```json
{
  "message": "Login realizado com sucesso",
  "token": "jwt_token_aqui",
  "user": {
    "id": 1,
    "name": "Usuário",
    "email": "usuario@email.com",
    "role": "admin"
  }
}
```

### Response `400`

```json
{
  "message": "Email e senha são obrigatórios"
}
```txt

### Response `401`

```json
{
  "message": "Credenciais inválidas"
}
```

---

# Usuários

## `GET /users`

Lista todos os usuários.

> Rota protegida.

### Headers

```http
Authorization: Bearer <token>
```

### Response `200`

```json
[
  {
    "id": 1,
    "name": "Administrador",
    "email": "admin@email.com",
    "role": "admin"
  },
  {
    "id": 2,
    "name": "Usuário comum",
    "email": "user@email.com",
    "role": "user"
  }
]
```

### Response `401`

```json
{
  "message": "Token não informado"
}
```

---

## `GET /users/:id`

Busca um usuário pelo identificador.

> Rota protegida.

### Response `200`

```json
{
  "id": 1,
  "name": "Administrador",
  "email": "admin@email.com",
  "role": "admin"
}
```

### Response `404`

```json
{
  "message": "Usuário não encontrado"
}
```

---

## `POST /users`

Cria um novo usuário.

### Request

```json
{
  "name": "Novo Usuário",
  "email": "novo@email.com",
  "password": "123456",
  "role": "user"
}
```

### Response `201`

```json
{
  "message": "Usuário criado com sucesso",
  "user": {
    "id": 3,
    "name": "Novo Usuário",
    "email": "novo@email.com",
    "role": "user"
  }
}
```

### Response `400`

```json
{
  "message": "Dados inválidos"
}
```

---

## `PUT /users/:id`

Atualiza os dados de um usuário.

> Rota protegida.

### Request

```json
{
  "name": "Usuário Atualizado",
  "email": "atualizado@email.com",
  "role": "admin"
}
```

### Response `200`

```json
{
  "message": "Usuário atualizado com sucesso"
}
```

### Response `404`

```json
{
  "message": "Usuário não encontrado"
}
```

---

## `DELETE /users/:id`

Remove um usuário pelo identificador.

> Rota protegida.

### Response `200`

```json
{
  "message": "Usuário removido com sucesso"
}
```

### Response `404`

```json
{
  "message": "Usuário não encontrado"
}
```

---

# Conteúdo público

## `GET /home`

Retorna dados da página inicial.

### Response `200`

```json
{
  "title": "Bem-vindo ao sistema",
  "description": "Conteúdo público da home"
}
```

---

## `GET /about`

Retorna dados da página institucional.

### Response `200`

```json
{
  "title": "Sobre",
  "description": "Informações sobre o projeto"
}
```

---

## `GET /contact`

Retorna dados da página de contato.

### Response `200`

```json
{
  "title": "Contato",
  "email": "contato@projeto.com"
}
```

---

# Área administrativa

## `GET /manager/dashboard`

Retorna informações do dashboard administrativo.

> Rota protegida.

### Response `200`

```json
{
  "usersCount": 10,
  "activeUsers": 8,
  "systemStatus": "ok"
}
```

---

## Convenções adotadas

### Padrão de resposta de sucesso

```json
{
  "message": "Operação realizada com sucesso",
  "data": {}
}
```

### Padrão de resposta de erro

```json
{
  "message": "Descrição do erro"
}
```

---

## Observações

- Algumas rotas exigem autenticação via JWT
- Endpoints administrativos podem exigir perfil específico
- Os exemplos apresentados são modelos e podem ser ajustados conforme a implementação real
- Recomenda-se manter este documento atualizado sempre que novas rotas forem criadas

---

## Resumo

A API foi projetada para:

- fornecer dados ao frontend
- autenticar usuários
- proteger rotas privadas
- organizar o backend em endpoints claros e consistentes
