# Deploy

Este documento descreve como preparar e publicar a aplicação em ambiente de produção, incluindo cuidados com frontend, backend, variáveis de ambiente e segurança.

---

## Visão geral

O deploy do projeto envolve duas partes principais:

- **frontend**
- **backend**

Cada uma pode ser publicada separadamente ou em conjunto, dependendo da estratégia adotada.

---

## Objetivos do deploy

- disponibilizar a aplicação em produção
- configurar ambiente seguro
- garantir funcionamento correto da API e da interface
- definir variáveis de ambiente adequadas
- preparar a aplicação para uso real

---

## Estrutura do projeto

```text
projeto-fullstack/
├── backend/
├── frontend/
├── docs/
└── README.md
```

---

## Pré-requisitos

Antes do deploy, verifique:

- projeto funcionando localmente
- scripts de build configurados
- variáveis de ambiente definidas
- rotas do backend testadas
- autenticação funcionando
- dependências instaladas corretamente

---

## Deploy do backend

O backend pode ser publicado em serviços como:

- Render
- Railway
- VPS
- Docker
- hospedagens com suporte a Node.js

### Passos gerais

1. instalar dependências
2. configurar variáveis de ambiente
3. gerar build do projeto
4. iniciar servidor em produção

### Exemplo de comandos

```bash
cd backend
npm install
npm run build
npm run start
```

---

## Variáveis de ambiente do backend

Em produção, defina pelo menos:

```env
PORT=3001
JWT_SECRET=uma_chave_forte_e_segura
JWT_EXPIRES_IN=1d
NODE_ENV=production
DB_PATH=./src/database/database.sqlite
```

### Atenções
- use uma chave JWT forte
- nunca exponha segredos no repositório
- ajuste caminhos do banco conforme o ambiente

---

## Deploy do frontend

O frontend pode ser publicado em serviços como:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

### Passos gerais

1. instalar dependências
2. gerar build da aplicação
3. publicar a pasta gerada

### Exemplo de comandos

```bash
cd frontend
npm install
npm run build
```

Normalmente o build será gerado em uma pasta como:

```text
dist/
```

---

## Configuração da URL da API

O frontend em produção deve apontar para a URL pública do backend.

### Exemplo

```env
VITE_API_URL=https://api.seuprojeto.com
```

### Uso esperado
Essa variável deve ser utilizada na configuração do Axios ou do serviço de requisições.

---

## Ambientes

### Desenvolvimento
- foco em testes locais
- logs detalhados
- banco local
- menor rigidez de configuração

### Produção
- foco em estabilidade
- segurança reforçada
- variáveis protegidas
- monitoramento e logs adequados

---

## Build de produção

### Backend
Certifique-se de que o TypeScript está sendo compilado corretamente.

Exemplo:

```bash
npm run build
```

Esse processo normalmente gera uma pasta como:

```text
dist/
```

### Frontend
O build do frontend gera arquivos otimizados para produção.

Exemplo:

```bash
npm run build
```

---

## Boas práticas de deploy

- usar `NODE_ENV=production`
- proteger segredos com variáveis de ambiente
- não versionar `.env`
- configurar CORS corretamente
- habilitar HTTPS em produção
- usar logs monitoráveis
- validar se as rotas protegidas continuam seguras após o deploy

---

## Banco de dados em produção

Como o projeto usa SQLite3, é importante observar:

- o arquivo do banco precisa estar em local persistente
- alguns provedores não são ideais para escrita contínua em SQLite
- para maior escalabilidade, considere migração futura para PostgreSQL ou MySQL

### Recomendação
Para estudos, protótipos e projetos menores, SQLite pode funcionar bem.  
Para produção com múltiplos acessos e necessidade de escala, vale avaliar outro banco.

---

## Checklist antes de publicar

- [ ] frontend funcionando localmente
- [ ] backend funcionando localmente
- [ ] autenticação validada
- [ ] variáveis de ambiente configuradas
- [ ] build executando sem erros
- [ ] `.env` fora do versionamento
- [ ] CORS configurado corretamente
- [ ] rotas privadas protegidas
- [ ] chave JWT segura
- [ ] banco acessível no ambiente de produção

---

## Exemplo de fluxo de deploy

```text
Desenvolvimento local
        ↓
Testes da aplicação
        ↓
Build do backend
        ↓
Build do frontend
        ↓
Configuração das variáveis de ambiente
        ↓
Publicação em serviço de hospedagem
        ↓
Validação final em produção
```

---

## Possíveis evoluções futuras

- deploy com Docker
- CI/CD com GitHub Actions
- banco de dados dedicado
- monitoramento com logs centralizados
- domínio personalizado
- HTTPS com certificado configurado

---

## Resumo

O deploy da aplicação deve garantir:

- build consistente
- configuração segura
- integração correta entre frontend e backend
- proteção das variáveis sensíveis
- ambiente preparado para uso em produção
