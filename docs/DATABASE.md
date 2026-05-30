# Banco de Dados

Este documento descreve a estrutura do banco de dados da aplicação, a tecnologia utilizada, a organização das tabelas e as principais decisões relacionadas à persistência dos dados.

---

## Visão geral

A aplicação utiliza **SQLite3** como banco de dados principal.

O banco é responsável por armazenar informações relacionadas a:

- usuários
- autenticação
- perfis e permissões
- dados administrativos
- demais registros necessários para os módulos do sistema

---

## Tecnologia utilizada

- **SQLite3**

### Motivos da escolha

- leve e simples de configurar
- ideal para desenvolvimento local
- não exige servidor de banco separado
- fácil de integrar com projetos Node.js
- bom para protótipos, estudos e sistemas de pequeno e médio porte

---

## Local do banco

O banco pode ser configurado por variável de ambiente.

### Exemplo

```env
DB_PATH=./src/database/database.sqlite
```

---

## Estrutura inicial sugerida

A estrutura pode evoluir conforme o sistema cresce, mas uma base inicial recomendada seria:

- tabela de usuários
- tabela de perfis ou papéis
- tabela de sessões ou controle de autenticação, se necessário
- tabelas específicas dos módulos

---

## Tabela: `users`

Responsável por armazenar os dados principais dos usuários do sistema.

### Campos sugeridos

| Campo | Tipo | Descrição |
|------|------|-----------|
| `id` | INTEGER | Identificador único do usuário |
| `name` | TEXT | Nome do usuário |
| `email` | TEXT | Email do usuário |
| `password` | TEXT | Hash da senha |
| `role` | TEXT | Perfil do usuário, como `admin` ou `user` |
| `created_at` | TEXT | Data de criação |
| `updated_at` | TEXT | Data de atualização |

### Observações

- o campo `email` deve ser único
- a senha deve ser armazenada com hash usando `bcrypt`
- o campo `role` pode controlar autorização por perfil

---

## Exemplo de criação da tabela `users`

```sql
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

---

## Tabelas adicionais possíveis

Dependendo da evolução do projeto, outras tabelas podem ser adicionadas.

### `profiles`
Caso queira separar perfis em uma tabela própria.

Exemplo:
- `id`
- `name`
- `description`

### `permissions`
Caso o sistema tenha controle de permissões mais detalhado.

Exemplo:
- `id`
- `name`
- `description`

### `manager_records`
Tabela para funcionalidades do módulo administrativo.

### `audit_logs`
Tabela para registrar ações importantes do sistema.

Exemplo:
- login
- remoção de usuário
- alteração de permissões
- atualizações críticas

---

## Relacionamentos

Em uma estrutura inicial simples, o sistema pode operar apenas com a tabela `users`.

Conforme o projeto cresce, podem ser criados relacionamentos como:

- um usuário pertence a um perfil
- um perfil possui várias permissões
- um administrador gerencia vários registros

---

## Operações mais comuns

O backend normalmente realizará as seguintes operações no banco:

- criar usuário
- buscar usuário por email
- listar usuários
- buscar usuário por id
- atualizar usuário
- remover usuário
- verificar credenciais para login

---

## Seed inicial

É recomendado criar um seed inicial para facilitar testes e desenvolvimento.

### Exemplo de usuário administrador

```sql
INSERT INTO users (name, email, password, role)
VALUES ('Administrador', 'admin@email.com', '$2b$10$hash_da_senha', 'admin');
```

> O valor da senha deve ser um hash gerado com `bcrypt`.

---

## Boas práticas

- nunca armazenar senhas em texto puro
- usar campos de auditoria como `created_at` e `updated_at`
- manter nomes de tabelas e colunas consistentes
- documentar alterações estruturais
- separar scripts de criação e seed quando possível

---

## Organização sugerida no projeto

```text
backend/
├── src/
│   ├── database/
│   │   ├── database.sqlite
│   │   ├── connection.ts
│   │   ├── migrations/
│   │   └── seeds/
```

### Responsabilidade dos arquivos

- **`connection.ts`**
  gerencia a conexão com o banco

- **`migrations/`**
  contém scripts de criação e alteração de tabelas

- **`seeds/`**
  contém scripts de dados iniciais

---

## Migrações

Mesmo com SQLite, é uma boa prática organizar alterações estruturais como migrações.

Exemplos:
- criação da tabela `users`
- adição de coluna `role`
- criação da tabela `permissions`

Isso facilita:
- manutenção
- versionamento
- padronização entre ambientes

---

## Escalabilidade futura

Se o sistema crescer e exigir maior robustez, a estrutura pode ser adaptada para bancos como:

- PostgreSQL
- MySQL

Como a aplicação já está organizada em camadas, essa mudança tende a ser mais controlada.

---

## Resumo

O banco de dados da aplicação foi pensado para:

- ser simples de iniciar
- atender bem ao desenvolvimento local
- armazenar usuários e dados dos módulos
- oferecer uma base organizada para crescimento futuro
