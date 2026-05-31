# Testes

Este documento descreve a estratégia de testes do projeto, as ferramentas utilizadas e como executar os testes da aplicação.

---

## Visão geral

Os testes têm como objetivo garantir que a aplicação funcione corretamente, reduzir regressões e aumentar a confiança durante a manutenção e evolução do sistema.

No backend, os testes são especialmente importantes para validar:

- regras de negócio
- autenticação
- autorização
- respostas da API
- integração entre camadas

---

## Ferramentas utilizadas

- **Jest**
- **Supertest** (opcional, recomendado para testes de API)

---

## Tipos de testes recomendados

### Testes unitários

Validam partes isoladas da aplicação.

Exemplos:
- funções utilitárias
- services
- validações
- regras de negócio

### Testes de integração

Validam a comunicação entre partes do sistema.

Exemplos:
- controller + service + model
- rotas da API
- autenticação com JWT
- acesso ao banco de dados

### Testes end-to-end
Podem ser adicionados futuramente para validar fluxos completos da aplicação.

Exemplos:
- login completo
- criação de usuário
- acesso a rota privada
- fluxo administrativo

---

## Estrutura sugerida

```text
backend/
├── __tests__/
│   ├── unit/
│   ├── integration/
│   └── setup/
```

---

## Organização recomendada

### `__tests__/unit/`
Contém testes unitários de funções e serviços.

Exemplos:
- `AuthService.test.ts`
- `UserService.test.ts`

### `__tests__/integration/`
Contém testes de rotas e integração entre camadas.

Exemplos:
- `auth.routes.test.ts`
- `users.routes.test.ts`

### `__tests__/setup/`
Arquivos auxiliares para preparação dos testes.

Exemplos:
- configuração global
- mocks
- banco de teste
- limpeza de dados

---

## O que testar no backend

### Autenticação
- login com credenciais válidas
- login com email inválido
- login com senha incorreta
- rejeição de token inválido
- acesso permitido com token válido

### Usuários
- criação de usuário
- bloqueio de email duplicado
- listagem de usuários
- busca por id
- atualização de usuário
- remoção de usuário

### Regras de negócio
- validação de campos obrigatórios
- permissões por perfil
- tratamento de erros
- cenários de sucesso e falha

---

## Exemplo de execução

### Rodar todos os testes

```bash
npm run test
```

### Rodar testes em modo watch

```bash
npm run test:watch
```

### Rodar cobertura

```bash
npm run test:coverage
```

> Os scripts exatos dependem da configuração do `package.json`.

---

## Exemplo de scripts no `package.json`

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

---

## Exemplo de teste unitário

```ts
describe('AuthService', () => {
  it('deve validar login com credenciais corretas', async () => {
    expect(true).toBe(true);
  });
});
```

---

## Exemplo de teste de integração com API

```ts
import request from 'supertest';
import app from '../src/app';

describe('POST /auth/login', () => {
  it('deve retornar 200 quando o login for válido', async () => {
    const response = await request(app).post('/auth/login').send({
      email: 'admin@email.com',
      password: '123456'
    });

    expect(response.status).toBe(200);
  });
});
```

---

## Banco de dados em testes

Para evitar impacto no ambiente de desenvolvimento, o ideal é usar:

- banco separado para testes
- dados temporários
- limpeza entre execuções

### Boas práticas
- não usar o banco principal em testes automatizados
- preparar dados mínimos necessários
- limpar tabelas antes ou depois dos testes
- isolar o ambiente de teste com `NODE_ENV=test`

---

## Cobertura de testes

A cobertura indica quais partes do código foram exercitadas pelos testes.

Ela ajuda a identificar:
- áreas sem validação
- trechos críticos não cobertos
- necessidade de testes adicionais

### Atenção
Cobertura alta é importante, mas mais importante ainda é testar os fluxos certos.

---

## Boas práticas

- testar comportamentos, não apenas implementação
- cobrir cenários de sucesso e erro
- manter testes simples e legíveis
- evitar dependência excessiva entre testes
- usar nomes claros e objetivos
- preparar ambiente de teste isolado

---

## Sugestão de prioridade

Se for começar aos poucos, a ordem recomendada é:

1. testes de autenticação
2. testes de usuários
3. testes de middlewares
4. testes de regras de autorização
5. testes dos módulos administrativos

---

## Resumo

Os testes ajudam a:

- aumentar a confiabilidade do sistema
- reduzir regressões
- validar regras de negócio
- melhorar manutenção e evolução do projeto
