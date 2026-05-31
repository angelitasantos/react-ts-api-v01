# Variáveis de Ambiente

Este documento descreve as variáveis de ambiente utilizadas no projeto, sua finalidade e exemplos de configuração.

---

## Visão geral

As variáveis de ambiente são usadas para armazenar configurações sensíveis ou específicas do ambiente, como:

- porta da aplicação
- chave secreta do JWT
- ambiente de execução
- caminho ou nome do banco de dados

Essas informações não devem ficar fixas diretamente no código-fonte.

---

## Arquivo `.env`

No backend, crie um arquivo chamado `.env` na raiz da pasta `backend`.

Exemplo:

```env
PORT=3001
JWT_SECRET=sua_chave_secreta
JWT_EXPIRES_IN=1d
NODE_ENV=development
DB_PATH=database.sqlite
```

---

## Arquivo `.env.example`

É recomendado versionar um arquivo `.env.example` na raiz do projeto ou dentro do backend, contendo apenas exemplos das variáveis necessárias.

Exemplo:

```env
PORT=3001
JWT_SECRET=defina_uma_chave_segura
JWT_EXPIRES_IN=1d
NODE_ENV=development
DB_PATH=database.sqlite
```

---

## Variáveis recomendadas

## `PORT`
Define a porta em que o backend será executado.

### Exemplo

```env
PORT=3001
```

### Uso
Utilizada pelo servidor Express para iniciar a aplicação.

---

## `JWT_SECRET`
Chave secreta usada para assinar e validar os tokens JWT.

### Exemplo

```env
JWT_SECRET=minha_chave_super_secreta
```

### Atenção
Essa variável é sensível e nunca deve ser exposta publicamente.

---

## `JWT_EXPIRES_IN`
Define o tempo de expiração do token JWT.

### Exemplo

```env
JWT_EXPIRES_IN=1d
```

### Possíveis valores
- `1h`
- `8h`
- `1d`
- `7d`

---

## `NODE_ENV`
Indica o ambiente de execução da aplicação.

### Exemplo

```env
NODE_ENV=development
```

### Valores comuns
- `development`
- `test`
- `production`

---

## `DB_PATH`
Define o nome ou caminho do arquivo SQLite.

### Exemplo

```env
DB_PATH=database.sqlite
```

Ou:

```env
DB_PATH=./src/database/app.db
```

---

## Exemplo completo

```env
PORT=3001
JWT_SECRET=sua_chave_super_secreta
JWT_EXPIRES_IN=1d
NODE_ENV=development
DB_PATH=./src/database/database.sqlite
```

---

## Boas práticas

- nunca versionar o arquivo `.env`
- sempre versionar um `.env.example`
- manter segredos fora do código-fonte
- usar valores diferentes para desenvolvimento, teste e produção
- documentar claramente cada variável utilizada

---

## Uso com dotenv

As variáveis de ambiente são carregadas com a biblioteca `dotenv`.

### Exemplo

```ts
import dotenv from 'dotenv';

dotenv.config();
```

Depois disso, elas podem ser acessadas com:

```ts
process.env.PORT
process.env.JWT_SECRET
```

---

## Sugestão de validação

É recomendado validar as variáveis obrigatórias na inicialização do projeto.

Exemplo de validação:
- verificar se `JWT_SECRET` existe
- verificar se `PORT` possui valor válido
- verificar se `DB_PATH` foi definido corretamente

Isso evita falhas em tempo de execução.

---

## Variáveis por ambiente

### Desenvolvimento
Pode usar:
- banco local SQLite
- logs detalhados
- token com tempo moderado de expiração

### Teste
Pode usar:
- banco separado para testes
- ambiente com menos ruído
- dados temporários

### Produção
Deve usar:
- chave JWT forte
- configurações seguras
- HTTPS
- valores definidos pelo ambiente de hospedagem

---

## Exemplo de `.gitignore`

Certifique-se de que o arquivo `.env` esteja ignorado:

```gitignore
.env
```

---

## Resumo

As variáveis de ambiente permitem:

- proteger informações sensíveis
- adaptar a aplicação para diferentes ambientes
- manter o código mais seguro e configurável
- facilitar manutenção e deploy do projeto
