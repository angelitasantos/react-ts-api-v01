# Segurança

Este documento descreve as principais práticas de segurança adotadas no projeto e os cuidados recomendados para desenvolvimento e produção.

---

## Visão geral

A segurança da aplicação envolve a proteção de:

- autenticação dos usuários
- dados sensíveis
- rotas privadas
- credenciais de acesso
- integridade das requisições
- ambiente de execução

---

## Práticas adotadas

O projeto utiliza medidas iniciais de segurança, como:

- autenticação com JWT
- hash de senha com bcrypt
- uso de variáveis de ambiente
- middleware de proteção de rotas
- uso de helmet
- configuração de CORS

---

## Senhas

As senhas dos usuários nunca devem ser armazenadas em texto puro.

### Prática recomendada
- gerar hash com `bcrypt`
- salvar apenas o hash no banco
- validar senha com `bcrypt.compare`

### Benefícios
- reduz risco em caso de vazamento de dados
- segue boas práticas modernas de autenticação

---

## JWT

A autenticação usa **JSON Web Token** para proteger rotas privadas.

### Cuidados importantes
- usar uma chave secreta forte em `JWT_SECRET`
- definir tempo de expiração do token
- validar token em todas as rotas protegidas
- nunca expor a chave JWT no frontend

### Header esperado

```http
Authorization: Bearer <token>
```

---

## Variáveis de ambiente

Informações sensíveis devem ficar em variáveis de ambiente.

Exemplos:
- `JWT_SECRET`
- `PORT`
- `DB_PATH`
- `NODE_ENV`

### Boas práticas
- nunca versionar `.env`
- manter um `.env.example`
- usar valores diferentes para cada ambiente
- proteger segredos em produção

---

## Rotas protegidas

As rotas privadas devem usar middleware de autenticação.

### Objetivos do middleware
- verificar presença do token
- validar assinatura
- identificar usuário autenticado
- bloquear acessos indevidos

### Exemplos de rotas protegidas
- `/users`
- `/users/:id`
- `/manager/dashboard`

---

## Autorização

Além de autenticar, o sistema pode verificar o perfil do usuário.

### Exemplo de perfis
- `admin`
- `user`

### Regras possíveis
- somente `admin` acessa dashboard administrativo
- usuário comum acessa apenas recursos permitidos

---

## Helmet

A biblioteca `helmet` pode ser usada para adicionar cabeçalhos HTTP de segurança.

### Benefícios
- reduz exposição a ataques comuns
- melhora proteção da aplicação Express
- aplica boas práticas de segurança em headers

---

## CORS

O CORS deve ser configurado para permitir apenas origens confiáveis.

### Objetivo
Controlar quais aplicações podem consumir a API.

### Boa prática
Evitar configuração totalmente aberta em produção, como:

```ts
origin: '*'
```

Em produção, prefira liberar apenas o domínio do frontend.

---

## Validação de entrada

Toda entrada recebida pela API deve ser validada.

### Exemplos
- email obrigatório no login
- senha obrigatória
- validação de campos no cadastro
- verificação de parâmetros nas rotas

### Benefícios
- reduz erros
- evita dados inconsistentes
- dificulta exploração de entradas maliciosas

---

## Tratamento de erros

A aplicação deve evitar expor detalhes internos em mensagens de erro.

### Recomendado
- retornar mensagens claras, mas genéricas
- registrar detalhes técnicos apenas em logs internos
- não expor stack trace em produção

---

## Logs e monitoramento

Logs ajudam a identificar falhas e atividades suspeitas.

### Exemplos de eventos úteis para log
- tentativas de login
- erros de autenticação
- falhas em rotas privadas
- ações administrativas sensíveis

### Atenção
Nunca registrar senhas, tokens completos ou segredos em logs.

---

## Banco de dados

Mesmo usando SQLite, algumas práticas devem ser mantidas:

- controlar acesso ao arquivo do banco
- evitar exposição pública do arquivo
- proteger dados sensíveis
- manter backup quando necessário

---

## HTTPS em produção

Em ambiente de produção, recomenda-se usar HTTPS para proteger:

- credenciais
- tokens
- dados trafegados entre frontend e backend

Sem HTTPS, informações podem ser interceptadas com mais facilidade.

---

## Dependências

Manter dependências atualizadas é uma medida importante de segurança.

### Recomendado
- revisar vulnerabilidades periodicamente
- atualizar bibliotecas com segurança
- remover dependências não utilizadas

---

## Checklist básico de segurança

- [ ] senhas com hash usando bcrypt
- [ ] JWT com chave secreta forte
- [ ] rotas privadas protegidas
- [ ] autorização por perfil quando necessário
- [ ] `.env` fora do versionamento
- [ ] CORS restrito em produção
- [ ] Helmet ativado
- [ ] validação de entradas
- [ ] logs sem dados sensíveis
- [ ] HTTPS em produção

---

## Resumo

A segurança do projeto deve garantir:

- proteção das credenciais
- controle de acesso às rotas privadas
- armazenamento seguro de senhas
- uso responsável de variáveis sensíveis
- configuração adequada para produção
