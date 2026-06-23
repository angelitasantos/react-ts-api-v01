# 🧠 Monorepo Architecture

## 📌 Visão geral

Este projeto foi migrado de uma arquitetura separada (frontend/backend independentes) para um **monorepo utilizando npm workspaces**.

A motivação principal foi:

- centralizar dependências
- compartilhar código entre aplicações
- reduzir duplicação
- melhorar escalabilidade
- simplificar CI/CD

---

## 🔄 O que mudou

### ❌ Antes (estrutura antiga)

O projeto era dividido em:
frontend/
backend/

Problemas dessa abordagem:

- duplicação de lógica
- dependências separadas
- builds isolados
- dificuldade de compartilhar código
- CI mais complexo

---

## ⚙️ Como o monorepo funciona

📦 npm workspaces

O projeto utiliza:
```bash
"workspaces": [
  "apps/*",
  "packages/*"
]
```

Isso permite:
- instalação única na raiz
- compartilhamento de dependências
- link automático entre packages

---

## 🔗 Imports entre pacotes

Exemplo:
```bash
import { SERVER_RUNNING } from '@project/shared'
```

Isso funciona porque todos os packages/ são registrados como workspaces.

---

## 🧱 Camadas da arquitetura

🟦 Apps (executáveis)
Responsáveis por execução final:
- frontends (React + Vite)
- backend (Node API)

---

## 🟨 Packages (reutilizáveis)

Responsáveis por lógica compartilhada:
- shared: constantes, tipos, utils
- ui: componentes reutilizáveis
- frontend-core: regras de frontend
- backend-core: regras de backend
- database: acesso a dados

---

## 🚀 Ordem de build

A ordem correta de compilação é:
1. shared
2. ui
3. frontend-core
4. backend-core
5. database
6. apps

---

## ⚙️ Scripts principais

### Build completo
```bash
npm run build
```

### Build por partes
```bash
npm run build:packages
npm run build:apps
```

### Lint
```bash
npm run lint
```

---

## 🔄 CI/CD (GitHub Actions)

O pipeline agora:
- instala dependências na raiz
- utiliza cache de npm
- executa build unificado
- roda lint global
- analisa monorepo inteiro

---

## 📦 ESLint e TypeScript

### ESLint
- apenas 1 configuração global (eslint.config.js)
- regras separadas por contexto (apps/packages)

### TypeScript
- base compartilhada (tsconfig.base.json)
- cada app possui config própria
- packages reutilizam base

---

## 📈 Benefícios da migração

- código reutilizável entre apps
- menos duplicação
- CI mais simples
- arquitetura escalável
- manutenção centralizada

---

## 🚧 Como evoluir o monorepo

🔹 1. Novos packages
Criar sempre dentro de:
```text
packages/
```

🔹 2. Novos apps
Criar dentro de:
```text
apps/
```

🔹 3. Reuso de código
Sempre preferir:
```text
@project/shared
@project/ui
```

em vez de duplicar lógica.

---

## 🚀 Próximas melhorias planejadas

1. Cache inteligente de build
- evitar rebuild completo
- build incremental por workspace

2. Paralelização de CI
- builds independentes por package

3. Otimização de pipeline
- detecção de mudanças (affected packages)

4. Possível adoção de ferramenta de build avançada
- Turborepo (leve)
- Nx (enterprise)

---

## 🧠 Resumo final

O monorepo atual representa uma evolução arquitetural importante:
- de múltiplos projetos isolados
- para uma única base de código integrada

Isso melhora:
- produtividade
- consistência
- escalabilidade
- manutenção a longo prazo
