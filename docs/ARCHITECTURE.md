# Arquitetura do Projeto

Este documento descreve a arquitetura do projeto full stack, incluindo a organização entre **frontend** e **backend**, o uso do padrão **MVC**, a separação por camadas e a aplicação de **Programação Orientada a Objetos**.

---

## Visão geral da arquitetura

O sistema foi dividido em duas partes:

- **Frontend**
  - interface da aplicação
  - navegação entre páginas
  - consumo da API
  - gerenciamento da experiência do usuário

- **Backend**
  - regras de negócio
  - autenticação
  - acesso ao banco de dados
  - disponibilização da API REST

Essa separação permite organização, manutenção e escalabilidade do projeto.

---

## Padrões adotados

### MVC

A arquitetura backend segue o padrão **MVC**, organizado em:

- **Controller**
  - recebe a requisição HTTP
  - interpreta parâmetros, body e token
  - chama a camada de serviço
  - retorna a resposta ao cliente

- **Service**
  - concentra as regras de negócio
  - valida fluxos da aplicação
  - orquestra operações entre controller e model

- **Model**
  - representa a estrutura de dados
  - encapsula acesso ao banco
  - define entidades e operações relacionadas aos dados

- **Routes**
  - define os endpoints da aplicação
  - conecta URL + método HTTP ao controller correto

---

## Programação Orientada a Objetos

O projeto adota princípios de **POO** para melhorar organização e reutilização de código.

### Objetivos do uso de POO

- encapsular responsabilidades
- melhorar legibilidade
- facilitar manutenção
- permitir evolução modular
- reduzir acoplamento entre camadas

### Aplicações práticas

- classes para serviços
- classes para controllers
- entidades/modelos organizados por domínio
- possível uso de herança, abstração e interfaces em funcionalidades compartilhadas

---

## Organização por domínio

O projeto é estruturado por módulos funcionais, o que facilita manutenção e expansão.

### Módulos principais

- **web-home**
  - páginas públicas e conteúdo institucional

- **web-auth**
  - autenticação, login, geração e validação de token

- **web-users**
  - gerenciamento de usuários

- **web-manager**
  - área administrativa e dashboard

Essa abordagem torna o sistema mais previsível e mais fácil de escalar.

---

## Arquitetura do backend

A estrutura do backend foi pensada para separar claramente responsabilidades.

### Fluxo de uma requisição

```text
Cliente -> Route -> Controller -> Service -> Model -> Banco de Dados
```

### Responsabilidade de cada camada

#### Routes
Mapeiam os endpoints da aplicação.

Exemplo:
- `POST /auth/login`
- `GET /users`
- `PUT /users/:id`

#### Controllers
Recebem a requisição e delegam a lógica para os serviços.

Responsabilidades:
- ler `req.params`
- ler `req.body`
- ler `req.headers`
- chamar service
- retornar `res.status(...).json(...)`

#### Services
Executam a regra de negócio da aplicação.

Exemplos:
- validar login
- verificar existência de usuário
- aplicar regras de permissão
- preparar dados antes de salvar no banco

#### Models
Realizam interação com o banco de dados.

Exemplos:
- buscar usuário por email
- listar usuários
- criar registro
- atualizar dados
- remover registro

#### Middlewares
Executam tarefas intermediárias antes da resposta final.

Exemplos:
- autenticação JWT
- autorização por perfil
- tratamento de erros
- logs
- segurança HTTP

---

## Arquitetura do frontend

O frontend foi estruturado para consumir a API backend e organizar as telas por responsabilidade.

### Principais responsabilidades

- renderização da interface
- navegação entre páginas
- controle de rotas públicas e privadas
- chamadas HTTP com Axios
- gerenciamento de autenticação no cliente

### Componentes esperados

- páginas públicas
- páginas privadas
- componentes reutilizáveis
- serviços para acesso à API
- contexto ou mecanismo de controle de autenticação

---

## Comunicação entre frontend e backend

A comunicação é feita por **HTTP/REST**, normalmente com `JSON`.

### Exemplo de fluxo de autenticação

```text
Frontend envia login -> Backend valida usuário -> Backend gera JWT -> Frontend armazena token -> Frontend envia token nas próximas requisições
```

### Cabeçalho esperado

```http
Authorization: Bearer <token>
```

---

## Segurança da aplicação

O projeto adota práticas iniciais de segurança:

- uso de **JWT** para autenticação
- uso de **bcrypt** para hash de senha
- uso de **helmet** para cabeçalhos HTTP seguros
- uso de **cors** para controle de origem
- uso de **dotenv** para segredos e configurações
- separação de variáveis sensíveis fora do código

---

## Persistência de dados

O banco utilizado é o **SQLite3**.

### Motivos da escolha

- leve
- simples de configurar
- ideal para desenvolvimento local
- não exige servidor de banco separado
- rápido para protótipos e projetos de pequeno e médio porte

### Observação
Para produção, dependendo da escala do sistema, pode ser interessante migrar futuramente para um banco como PostgreSQL ou MySQL.

---

## Benefícios da arquitetura escolhida

- código mais organizado
- responsabilidades bem definidas
- facilidade de manutenção
- melhor testabilidade
- maior facilidade para adicionar novos módulos
- separação clara entre regra de negócio e acesso a dados

---

## Escalabilidade futura

A arquitetura permite expansão com relativa facilidade, por exemplo:

- criação de novos módulos
- adição de perfis de usuário
- novos middlewares
- testes mais abrangentes
- integração com outros bancos
- criação de APIs adicionais

---

## Resumo

Este projeto foi estruturado com foco em:

- separação entre frontend e backend
- backend em arquitetura MVC
- uso de Programação Orientada a Objetos
- organização por domínio
- autenticação segura com JWT
- base sólida para evolução do sistema
