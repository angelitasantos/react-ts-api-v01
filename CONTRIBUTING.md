# Contributing

Obrigado pelo interesse em contribuir com este projeto.

Este documento descreve boas práticas para contribuição, organização do fluxo de trabalho e padrões recomendados para manter a qualidade e a consistência do código.

---

## Objetivo

O objetivo deste guia é facilitar contribuições de forma organizada, previsível e alinhada com a estrutura do projeto.

Contribuições podem incluir:

- correção de bugs
- melhorias de código
- refatorações
- documentação
- testes
- novas funcionalidades

---

## Pré-requisitos

Antes de contribuir, é recomendado ter:

- Node.js `v18+`
- npm
- Git
- conhecimento básico de React, TypeScript, Node.js e Express

---

## Estrutura do projeto

Consulte os documentos abaixo para entender melhor a organização:

- `README.md`
- `docs/ARCHITECTURE.md`
- `docs/PROJECT-STRUCTURE.md`
- `docs/ROUTES.md`

---

## Como contribuir

### 1. Faça um fork do repositório

Crie uma cópia do projeto na sua conta.

### 2. Clone o repositório

```bash
git clone <url-do-seu-fork>
```

### 3. Crie uma branch para sua alteração

Use nomes claros e objetivos.

Exemplos:

```bash
git checkout -b feat/create-users-page
git checkout -b fix/login-validation
git checkout -b docs/update-readme
```

### 4. Faça as alterações necessárias

Mantenha o escopo da branch focado em uma única alteração ou melhoria.

### 5. Teste sua alteração

Antes de enviar, valide se:

- o projeto roda localmente
- não existem erros de build
- os testes passam
- a documentação necessária foi atualizada

### 6. Faça commit das mudanças

Prefira mensagens claras e descritivas.

Exemplos:

```bash
git commit -m "feat: adiciona listagem de usuários"
git commit -m "fix: corrige validação no login"
git commit -m "docs: atualiza documentação da arquitetura"
```

### 7. Envie para seu fork

```bash
git push origin nome-da-branch
```

### 8. Abra um Pull Request

Descreva com clareza:

- o que foi alterado
- por que a alteração foi feita
- quais impactos existem
- como testar

---

## Boas práticas de contribuição

- manter alterações pequenas e objetivas
- evitar misturar refatoração com nova funcionalidade sem necessidade
- seguir a arquitetura já definida
- respeitar a separação de responsabilidades
- atualizar documentação quando necessário
- adicionar testes sempre que fizer sentido

---

## Padrões de código

### Backend
- organizar código em camadas
- manter controllers enxutos
- colocar regras de negócio em services
- isolar acesso a dados em models
- usar middlewares para autenticação, autorização e tratamento comum

### Frontend
- criar componentes reutilizáveis
- evitar duplicação de lógica
- separar páginas, componentes e serviços
- manter rotas organizadas
- usar nomes claros para arquivos e componentes

---

## Padrões de nomenclatura

### Arquivos
Prefira nomes consistentes com a função do arquivo.

Exemplos:
- `AuthController.ts`
- `UserService.ts`
- `auth.routes.ts`
- `PrivateRoutes.tsx`

### Branches
Sugestão de prefixos:
- `feat/`
- `fix/`
- `docs/`
- `refactor/`
- `test/`
- `chore/`

- feat: → nova funcionalidade
- fix: → correção de bug
- docs: → documentação
- style: → formatação/estilo sem alterar lógica
- refactor: → reorganização sem mudar comportamento
- test: → testes
- chore: → tarefas internas/configuração/manutenção
- build: → build/dependências

---

## Commits recomendados

Se desejar, adote um padrão simples inspirado em Conventional Commits.

### Exemplos

- `feat: adiciona dashboard administrativo`
- `fix: corrige erro de autenticação`
- `docs: atualiza arquivo de rotas`
- `refactor: reorganiza módulo de usuários`
- `test: adiciona testes de login`

---

## Checklist antes de abrir PR

- [ ] código funcionando localmente
- [ ] build sem erros
- [ ] testes executados
- [ ] documentação atualizada, se necessário
- [ ] sem segredos ou credenciais no código
- [ ] alteração alinhada com a arquitetura do projeto

---

## O que evitar

- commits com muitas alterações sem relação entre si
- código comentado sem necessidade
- inclusão de arquivos sensíveis como `.env`
- quebra de padrão estrutural sem justificativa
- alterações grandes sem contexto ou documentação

---

## Sugestões e melhorias

Se não quiser abrir código diretamente, você também pode contribuir com:

- sugestões de arquitetura
- melhorias de documentação
- relato de bugs
- propostas de refatoração
- melhorias de usabilidade

---

## Resumo

Contribuir com este projeto significa manter:

- clareza
- organização
- consistência
- documentação atualizada
- respeito à arquitetura definida
