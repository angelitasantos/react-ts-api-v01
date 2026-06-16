# GitHub Actions e Templates do Projeto

## Objetivo

Esta documentação descreve a estrutura de automação, validação e padronização utilizada no projeto através do GitHub.

---

# Estrutura

```bash
.github/
├── workflows/
│   ├── ci.yml
│   ├── pr-validation.yml
│   └── codeql.yml
│
├── ISSUE_TEMPLATE/
│   ├── bug_report.md
│   └── feature_request.md
│
└── pull_request_template.md
```

---

# Workflows

Os workflows são executados automaticamente pelo GitHub Actions.

## CI

Arquivo:

```bash
.github/workflows/ci.yml
```

### Objetivo

Validar se o projeto compila corretamente após qualquer alteração enviada para o repositório.

### Quando executa

* Push em qualquer branch.

### O que verifica

#### Backend

* Instala dependências
* Compila TypeScript
* Executa build

#### Frontend

* Instala dependências
* Compila TypeScript
* Executa build

### Benefícios

* Detecta erros rapidamente
* Evita commits quebrados
* Garante que o projeto continua compilando

---

## Pull Request Validation

Arquivo:

```bash
.github/workflows/pr-validation.yml
```

### Objetivo

Validar automaticamente alterações antes de serem mescladas.

### Quando executa

* Abertura de Pull Request
* Atualização de Pull Request

### O que verifica

#### Backend

* Instala dependências
* Executa lint
* Executa build

#### Frontend

* Instala dependências
* Executa lint
* Executa build

### Benefícios

* Impede merge de código inválido
* Padroniza qualidade do projeto
* Facilita revisão de código

---

## CodeQL

Arquivo:

```bash
.github/workflows/codeql.yml
```

### Objetivo

Realizar análise estática de segurança no código.

### Quando executa

* Push para branches principais
* Pull Requests
* Agendamento semanal

### O que verifica

* Vulnerabilidades conhecidas
* Problemas de segurança
* Possíveis falhas de código
* Más práticas de desenvolvimento

### Benefícios

* Maior segurança
* Detecção antecipada de riscos
* Integração nativa com GitHub Security

---

# Templates

Os templates ajudam a padronizar a comunicação do projeto.

---

## Pull Request Template

Arquivo:

```bash
.github/pull_request_template.md
```

### Objetivo

Padronizar a descrição de Pull Requests.

### Estrutura

```md
## O que foi alterado

-

## Motivo

-

## Como testar

-

## Checklist

- [ ] Build executado
- [ ] Lint executado
- [ ] Sem erros de TypeScript
- [ ] Funcionalidade testada
```

### Benefícios

* Facilita revisões
* Melhora rastreabilidade
* Documenta alterações

---

## Bug Report

Arquivo:

```bash
.github/ISSUE_TEMPLATE/bug_report.md
```

### Objetivo

Registrar problemas encontrados no sistema.

### Informações registradas

* Descrição do problema
* Passos para reproduzir
* Resultado esperado
* Resultado atual
* Ambiente utilizado

### Benefícios

* Facilita correções
* Organiza histórico de bugs
* Padroniza abertura de chamados

---

## Feature Request

Arquivo:

```bash
.github/ISSUE_TEMPLATE/feature_request.md
```

### Objetivo

Registrar solicitações de novas funcionalidades.

### Informações registradas

* Funcionalidade desejada
* Problema que será resolvido
* Solução proposta
* Observações adicionais

### Benefícios

* Organiza backlog
* Facilita planejamento
* Mantém histórico de decisões

---

# Fluxo de Desenvolvimento

## Nova funcionalidade

1. Criar uma Issue (Feature Request)
2. Criar branch da funcionalidade
3. Desenvolver
4. Abrir Pull Request
5. Workflow de validação executa automaticamente
6. Revisar e aprovar
7. Realizar merge

---

## Correção de bug

1. Criar uma Issue (Bug Report)
2. Criar branch de correção
3. Corrigir problema
4. Abrir Pull Request
5. Workflow de validação executa automaticamente
6. Revisar e aprovar
7. Realizar merge

---

# Convenção de Commits

Exemplos utilizados no projeto:

```bash
feat: adiciona cadastro de usuários

fix: corrige validação de login

refactor: reorganiza estrutura do backend

docs: atualiza documentação dos workflows

chore: adiciona configuração do github actions

style: ajusta formatação de arquivos

test: adiciona testes do módulo users
```

---

# Próximos Passos

Workflows planejados para futuras versões:

```bash
.github/workflows/
├── deploy-dev.yml
├── deploy-prod.yml
├── release.yml
└── dependency-update.yml
```

Objetivos futuros:

* Deploy automático
* Releases automáticas
* Atualização de dependências
* Publicação de changelog

```
```
