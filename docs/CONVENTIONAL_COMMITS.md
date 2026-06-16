# Conventional Commits - Guia Prático

Este documento apresenta os principais tipos de commits utilizados em projetos Git seguindo a convenção **Conventional Commits**.

---

# Estrutura

```bash
tipo: descrição curta
```

Exemplos:

```bash
feat: adiciona autenticação JWT
fix: corrige erro de login
docs: atualiza README
```

---

# feat

Utilizado quando uma **nova funcionalidade** é adicionada ao sistema.

## Quando usar

* Nova tela
* Novo endpoint
* Novo componente
* Nova regra de negócio
* Nova funcionalidade para o usuário

## Exemplos

```bash
feat: adiciona tela de cadastro de usuários

feat: implementa autenticação JWT

feat: cria endpoint para recuperação de senha

feat: adiciona filtro por período no extrato
```

---

# fix

Utilizado para **correção de bugs**.

## Quando usar

* Erro de lógica
* Erro de validação
* Correção de comportamento incorreto
* Ajuste de bugs reportados

## Exemplos

```bash
fix: corrige validação de email

fix: corrige erro ao salvar usuário sem telefone

fix: corrige redirecionamento após login

fix: resolve problema de paginação
```

---

# refactor

Utilizado quando o código é reorganizado sem alterar comportamento.

## Quando usar

* Melhorar organização
* Extrair funções
* Dividir arquivos grandes
* Melhorar legibilidade

## Não usar

Se houver nova funcionalidade use:

```bash
feat:
```

Se houver correção de bug use:

```bash
fix:
```

## Exemplos

```bash
refactor: separa regras de autenticação em service

refactor: reorganiza estrutura MVC

refactor: extrai componente de formulário

refactor: simplifica validações do controller
```

---

# docs

Alterações apenas na documentação.

## Quando usar

* README
* Wiki
* Guias
* Comentários importantes

## Exemplos

```bash
docs: atualiza instruções de instalação

docs: adiciona guia de deploy

docs: corrige exemplos de uso da API

docs: adiciona documentação do banco de dados
```

---

# style

Alterações visuais ou de formatação sem impacto na lógica.

## Quando usar

* Indentação
* Espaçamentos
* Formatação
* Ajustes de CSS

## Exemplos

```bash
style: ajusta alinhamento do header

style: melhora espaçamento dos cards

style: padroniza formatação do código

style: corrige responsividade do menu
```

---

# test

Alterações relacionadas a testes.

## Quando usar

* Criar testes
* Atualizar testes
* Corrigir testes

## Exemplos

```bash
test: adiciona testes do AuthService

test: atualiza cenários de login

test: corrige mocks da API
```

---

# chore

Tarefas de manutenção que não alteram funcionalidades.

## Quando usar

* Dependências
* Configurações
* Scripts
* Ferramentas

## Exemplos

```bash
chore: atualiza dependências do projeto

chore: adiciona configuração do ESLint

chore: configura GitHub Actions

chore: ajusta script de build
```

---

# build

Alterações relacionadas ao processo de build.

## Quando usar

* Vite
* Webpack
* Rollup
* TypeScript
* Docker

## Exemplos

```bash
build: adiciona configuração do Docker

build: ajusta compilação do TypeScript

build: configura Vite para produção
```

---

# ci

Alterações em pipelines de integração contínua.

## Quando usar

* GitHub Actions
* GitLab CI
* Jenkins
* Azure DevOps

## Exemplos

```bash
ci: adiciona workflow de testes

ci: configura deploy automático

ci: adiciona validação de lint
```

---

# perf

Melhorias de desempenho.

## Quando usar

* Otimizações
* Cache
* Consultas mais rápidas
* Menor consumo de memória

## Exemplos

```bash
perf: otimiza consulta de usuários

perf: reduz tempo de carregamento da dashboard

perf: melhora cache de autenticação
```

---

# revert

Reverte um commit anterior.

## Exemplos

```bash
revert: remove autenticação OAuth

revert: desfaz alteração na tela de login
```

---

# Exemplos Reais

## Criou uma página nova

```bash
feat: adiciona página de contato
```

## Corrigiu um bug no login

```bash
fix: corrige validação de senha
```

## Dividiu um arquivo grande em vários menores

```bash
refactor: separa hooks de autenticação
```

## Atualizou o README

```bash
docs: atualiza documentação do projeto
```

## Atualizou dependências

```bash
chore: atualiza dependências do frontend
```

## Criou testes

```bash
test: adiciona testes para login
```

## Ajustou CSS

```bash
style: melhora espaçamento do formulário
```

## Configurou GitHub Actions

```bash
ci: adiciona pipeline de build e testes
```

---

# Fluxo Recomendado

```bash
feat: adiciona CRUD de usuários

fix: corrige exclusão de usuários

refactor: reorganiza módulo de autenticação

test: adiciona testes do UserService

docs: atualiza README

chore: atualiza dependências

ci: adiciona workflow de deploy
```

Seguindo esse padrão, o histórico do Git fica muito mais organizado, facilitando revisões, auditorias, geração de changelog e manutenção do projeto.
