# 🚀 CI/CD Pipeline & Automation

Este projeto utiliza GitHub Actions para automação de build, validação de código e análise de segurança, além do Dependabot para manutenção de dependências.

---

## 🧱 Visão Geral do Pipeline

O fluxo de automação está dividido em três camadas principais:


---

## 🔵 CI (Continuous Integration)

Executado em **qualquer push** para o repositório.

### Responsabilidades:
- Instala dependências do backend e frontend
- Executa build de ambos os projetos
- Garante que o projeto compila corretamente

### Objetivo:
Garantir que qualquer alteração enviada não quebre o build da aplicação.

---

## 🟣 PR Validation

Executado em **Pull Requests para `main` e `develop`**.

### Responsabilidades:
- Lint do backend
- Lint do frontend
- Build do backend
- Build do frontend

### Objetivo:
Validar qualidade de código antes do merge.

---

## 🟡 CodeQL (Security Analysis)

Executado em:
- Push na `main` e `develop`
- Pull Requests
- Agendamento semanal (cron)

### Responsabilidades:
- Análise automática de vulnerabilidades
- Detecção de padrões inseguros no código
- Segurança em autenticação, dependências e APIs

### Objetivo:
Identificar riscos de segurança antes de chegarem à produção.

---

## 🔐 Dependabot

O Dependabot é responsável por manter dependências atualizadas automaticamente.

### Funcionalidades:
- Detecta vulnerabilidades em dependências npm
- Abre Pull Requests automáticos para updates
- Sugere correções seguras para bibliotecas

### Estratégia atual:
- Atualizações semanais
- Atualização baseada em lockfile (mais estável)
- Limite de PRs para evitar conflitos simultâneos

### Objetivo:
Manter o projeto seguro e atualizado com o mínimo de intervenção manual.

---

## 🧠 Boas práticas adotadas

- Builds separados por frontend e backend
- Uso de `npm ci` para instalação determinística
- Cache de dependências no GitHub Actions
- Execução paralela controlada com `concurrency`
- Separação clara entre build, qualidade e segurança

---

## 📌 Resumo

| Camada | Função |
|--------|--------|
| CI | Garantir build funcionando |
| PR Validation | Garantir qualidade de código |
| CodeQL | Garantir segurança |
| Dependabot | Manter dependências atualizadas |

---

## 🚀 Resultado final

Este pipeline garante:

- Estabilidade do build
- Qualidade do código
- Segurança automatizada
- Manutenção contínua de dependências
