# Autenticação e Autorização

Este documento descreve como funciona o processo de autenticação e autorização da aplicação utilizando **JWT (JSON Web Token)**.

---

## Visão geral

O módulo de autenticação é responsável por:

- validar credenciais do usuário
- gerar token JWT após login
- proteger rotas privadas
- controlar acesso a recursos administrativos

---

## Tecnologias utilizadas

- **jsonwebtoken**
- **bcrypt**
- **Express middleware**
- **dotenv**

---

## Fluxo de autenticação

O processo de autenticação segue o fluxo abaixo:

```text
Usuário envia email e senha
        ↓
Backend valida as credenciais
        ↓
Senha é comparada com bcrypt
        ↓
Token JWT é gerado
        ↓
Frontend armazena o token
        ↓
Token é enviado nas rotas protegidas
```

---

## Login

O login é realizado por meio de uma rota como:

```http
POST /auth/login
```

### Exemplo de requisição

```json
{
  "email": "usuario@email.com",
  "password": "123456"
}
```

### Processo realizado no backend

1. verifica se email e senha foram enviados
2. busca o usuário no banco de dados
3. compara a senha enviada com o hash salvo usando `bcrypt`
4. gera um token JWT se as credenciais forem válidas
5. retorna o token para o cliente

### Exemplo de resposta

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

---

## Geração do token

O token JWT é gerado utilizando uma chave secreta definida no arquivo `.env`.

### Exemplo de payload

```json
{
  "id": 1,
  "email": "usuario@email.com",
  "role": "admin"
}
```

### Exemplo de configuração

- chave secreta: `JWT_SECRET`
- expiração: opcional, por exemplo `1d`, `8h`, `7d`

---

## Uso do token

Após o login, o frontend deve enviar o token no cabeçalho das requisições protegidas.

### Header esperado

```http
Authorization: Bearer <token>
```

---

## Middleware de autenticação

As rotas privadas devem utilizar um middleware responsável por:

- verificar se o token foi enviado
- validar a assinatura do token
- extrair os dados do usuário
- liberar ou bloquear o acesso

### Exemplo de responsabilidades do middleware

- rejeitar requisições sem token
- rejeitar token inválido
- permitir acesso com token válido
- anexar informações do usuário autenticado à requisição

---

## Rotas públicas e privadas

### Rotas públicas
Não exigem autenticação.

Exemplos:
- `/home`
- `/about`
- `/contact`
- `/auth/login`

### Rotas privadas
Exigem token JWT válido.

Exemplos:
- `/users`
- `/users/:id`
- `/manager/dashboard`

---

## Autorização por perfil

Além da autenticação, algumas rotas podem exigir **autorização por perfil**.

### Exemplo de perfis

- `admin`
- `user`

### Exemplo de regra

- usuário `admin` pode acessar rotas administrativas
- usuário `user` pode acessar apenas recursos permitidos ao seu perfil

---

## Hash de senha com bcrypt

As senhas nunca devem ser armazenadas em texto puro.

### Processo recomendado

1. receber senha no cadastro
2. gerar hash com `bcrypt`
3. salvar apenas o hash no banco
4. comparar senha no login usando `bcrypt.compare`

### Benefícios

- aumenta a segurança
- evita exposição direta da senha
- segue boa prática de autenticação

---

## Variáveis de ambiente relacionadas

Exemplo:

```env
JWT_SECRET=sua_chave_secreta
JWT_EXPIRES_IN=1d
```

---

## Cuidados importantes

- nunca expor `JWT_SECRET` no repositório
- nunca salvar senha sem hash
- validar sempre os dados recebidos no login
- proteger rotas sensíveis com middleware
- restringir acesso administrativo por perfil
- usar HTTPS em produção

---

## Fluxo resumido

```text
Cadastro -> senha com hash
Login -> validação com bcrypt
JWT -> geração do token
Middleware -> valida token
Autorização -> verifica perfil do usuário
```

---

## Resumo

A autenticação da aplicação foi projetada para:

- validar credenciais com segurança
- proteger rotas privadas com JWT
- armazenar senhas com hash usando bcrypt
- permitir controle de acesso por perfil
- fornecer uma base segura para os módulos do sistema
