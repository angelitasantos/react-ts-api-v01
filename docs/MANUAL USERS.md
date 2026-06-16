# Módulo de Usuários e Controle de Acesso

## Objetivo

O módulo de usuários será responsável por:

* Autenticação de usuários.
* Recuperação de senha.
* Gerenciamento de perfil.
* Controle de acesso por papéis (roles).
* Controle de permissões.
* Bloqueio de usuários inativos.
* Obrigatoriedade de troca de senha no primeiro acesso.
* Auditoria básica de criação e alteração de usuários.

A implementação inicial utilizará SQLite3, porém a estrutura foi planejada para permitir futura migração para bancos como PostgreSQL ou MySQL sem alterações significativas na regra de negócio.

---

# Conceitos

## Usuário

Representa uma pessoa autorizada a acessar o sistema.

Cada usuário possui:

* Nome
* E-mail
* Senha
* Status de ativação
* Data de criação
* Data de atualização

Além disso, poderá possuir:

* Múltiplos papéis (roles)
* Múltiplas permissões herdadas dos papéis

---

## Role

Role representa um grupo de acesso.

Exemplos:

* ADMIN
* MANAGER
* USER

O sistema não deve depender do nome da role para liberar acesso.

As permissões sempre serão utilizadas para validar o acesso às funcionalidades.

Exemplo:

Role:

```bash
ADMIN
```

Permissões herdadas:

```bash
users.view
users.create
users.update
users.disable
manager.access
erp.access
```

---

## Permissão

Permissão representa uma ação ou acesso específico.

Exemplos:

```bash
manager.access
users.access
erp.access

users.view
users.create
users.update
users.disable

profile.update
password.change
```

O backend deverá validar permissões e nunca apenas o nome da role.

---

# Estrutura Inicial

## Tabela users

Responsável pelos dados principais do usuário.

Campos:

| Campo                | Descrição                 |
| -------------------- | ------------------------- |
| id                   | Identificador único       |
| name                 | Nome do usuário           |
| email                | E-mail único              |
| password_hash        | Senha criptografada       |
| is_active            | Usuário ativo ou inativo  |
| must_change_password | Obriga troca de senha     |
| last_login_at        | Último login              |
| password_changed_at  | Última alteração de senha |
| created_at           | Data de criação           |
| updated_at           | Data de atualização       |
| created_by           | Usuário que criou         |
| updated_by           | Usuário que alterou       |

---

## Tabela roles

Responsável pelos grupos de acesso.

Campos:

| Campo       | Descrição     |
| ----------- | ------------- |
| id          | Identificador |
| name        | Nome da role  |
| description | Descrição     |

Exemplos:

```bash
ADMIN
MANAGER
USER
```

---

## Tabela user_roles

Relacionamento entre usuários e roles.

Um usuário poderá possuir uma ou mais roles.

Exemplo:

```bash
João
 ├── USER
 └── ERP
```

---

## Tabela permissions

Lista de permissões disponíveis no sistema.

Exemplo:

```bash
manager.access
users.access
erp.access

users.view
users.create
users.update
users.disable
```

---

## Tabela role_permissions

Relaciona roles com permissões.

Exemplo:

Role:

```bash
MANAGER
```

Permissões:

```bash
manager.access
users.view
users.create
users.update
```

---

## Tabela password_resets

Responsável pela recuperação de senha.

Campos:

| Campo      | Descrição          |
| ---------- | ------------------ |
| id         | Identificador      |
| user_id    | Usuário            |
| token      | Token único        |
| expires_at | Expiração          |
| used_at    | Data de utilização |
| created_at | Data de criação    |

---

# Fluxo de Login

## Login válido

Usuário informa:

```bash
email
senha
```

Validações:

1. Usuário existe.
2. Usuário está ativo.
3. Senha correta.

Se todas forem válidas:

```bash
JWT gerado
Usuário autenticado
```

Registrar:

```bash
last_login_at
```

---

## Login de usuário inativo

Quando:

```bash
is_active = 0
```

Resultado:

```bash
Acesso negado.
```

Mensagem:

```bash
Usuário desativado.
Entre em contato com o administrador.
```

---

# Primeiro Acesso

## Criação pelo Manager

Ao criar um usuário:

* Sistema gera senha provisória.
* Usuário recebe a senha temporária.
* Campo:

```bash
must_change_password = 1
```

---

## Primeiro Login

Após autenticação:

```bash
must_change_password = 1
```

O sistema deve:

* Permitir acesso apenas à página de troca de senha.
* Bloquear todas as demais rotas privadas.

Rotas liberadas:

```bash
/account/change-password
/logout
```

---

## Após trocar a senha

Atualizar:

```bash
must_change_password = 0
password_changed_at = data atual
```

A partir desse momento o usuário poderá acessar normalmente o sistema.

---

# Recuperação de Senha

## Solicitação

Página:

```bash
/forgot-password
```

Usuário informa:

```bash
email
```

---

## Geração de Token

Sistema:

1. Localiza usuário.
2. Gera token seguro.
3. Salva token.
4. Define validade.

Exemplo:

```bash
1 hora
```

---

## Link enviado

Exemplo:

```bash
/reset-password/{token}
```

---

## Definição da nova senha

Validações:

* Token existe.
* Token não expirou.
* Token não foi utilizado.

Após sucesso:

* Atualiza senha.
* Define:

```bash
used_at
```

---

# Perfil do Usuário

Página:

```bash
/account/profile
```

Permite:

* Alterar nome.
* Alterar e-mail.

Não permite:

* Alterar permissões.
* Alterar roles.

---

# Troca de Senha

Página:

```bash
/account/change-password
```

Regras:

Usuário informa:

```bash
senha atual
nova senha
confirmação
```

Validações:

* Senha atual correta.
* Nova senha válida.
* Confirmação igual.

Atualizar:

```bash
password_hash
password_changed_at
```

---

# Cadastro de Usuários

Página:

```bash
/users/new
```

Permissão necessária:

```bash
users.create
```

Informações:

```bash
nome
email
roles
```

O sistema:

* Cria senha provisória.
* Define usuário como ativo.
* Define troca obrigatória de senha.

---

# Listagem de Usuários

Página:

```bash
/users
```

Permissão:

```bash
users.view
```

Informações exibidas:

* Nome
* E-mail
* Status
* Roles
* Data de criação
* Último acesso

---

# Alteração de Usuários

Página:

```bash
/users/:id/edit
```

Permissão:

```bash
users.update
```

Permite alterar:

* Nome
* E-mail
* Roles
* Status

Não permite visualizar senha.

---

# Desativação de Usuários

O sistema não utilizará exclusão física.

Ao invés disso:

```bash
is_active = 0
```

Benefícios:

* Preserva histórico.
* Mantém auditoria.
* Evita perda de relacionamentos futuros.

---

# Exclusão Física

Não será implementada inicialmente.

Caso exista futuramente:

* Apenas administradores.
* Apenas em ambiente controlado.
* Preferencialmente nunca utilizada.

---

# Auditoria

Toda criação deverá registrar:

```bash
created_by
created_at
```

Toda alteração deverá registrar:

```bash
updated_by
updated_at
```

Objetivo:

* Rastreabilidade.
* Histórico administrativo.
* Segurança operacional.

---

# Estrutura de Rotas

## Públicas

```bash
/login
/forgot-password
/reset-password/:token
```

---

## Conta do Usuário

```bash
/account/profile
/account/change-password
```

---

## Administração

```bash
/users
/users/new
/users/:id/edit
/users/:id/details
```

---

# Permissões Iniciais Sugeridas

```bash
manager.access

users.access

users.view
users.create
users.update
users.disable

profile.update
password.change

erp.access
```

---

# Objetivos Futuros

Evoluções previstas:

* Histórico de login.
* Bloqueio por tentativas inválidas.
* Sessões simultâneas.
* Expiração de senha.
* Logs administrativos.
* Auditoria completa.
* MFA (autenticação em dois fatores).
* Controle granular por módulos.
* Permissões por ação e recurso.
