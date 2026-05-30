# Estrutura do Projeto

## Versão resumida da estrutura principal

```bash
projeto-fullstack/
├── backend/
│   ├── src/
│   │   ├── __tests__/
│   │   ├── config/
│   │   ├── constants/
│   │   ├── database/
│   │   ├── middlewares/
│   │   ├── modules/
│   │   ├── routes/
│   │   ├── types/
│   │   └── utils/
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   ├── modules/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── types/
│   │   └── utils/
│   ├── package.json
│   └── vite.config.ts
├── docs/
├── .env.example
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
└── README.md

```

## Versão detalhada

```bash
projeto-fullstack/
├── backend/
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── app.ts
│   │   ├── server.ts
│   │   ├── config/
│   │   │   ├── env.ts
│   │   │   └── cors.ts
│   │   ├── database/
│   │   │   ├── connection.ts
│   │   │   ├── database.sqlite
│   │   │   ├── migrations/
│   │   │   │   └── create-users-table.sql
│   │   │   └── seeds/
│   │   │       └── seed-admin-user.sql
│   │   ├── middlewares/
│   │   │   ├── authMiddleware.ts
│   │   │   ├── roleMiddleware.ts
│   │   │   ├── errorHandler.ts
│   │   │   └── notFound.ts
│   │   ├── modules/
│   │   │   ├── web-auth/
│   │   │   │   ├── controllers/
│   │   │   │   │   └── AuthController.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── AuthService.ts
│   │   │   │   ├── models/
│   │   │   │   │   └── AuthModel.ts
│   │   │   │   ├── routes/
│   │   │   │   │   └── auth.routes.ts
│   │   │   │   ├── mappers/
│   │   │   │   │   └── LoginMapper.ts
│   │   │   │   └── types/
│   │   │   │       └── AuthPayload.ts
│   │   │   ├── web-users/
│   │   │   │   ├── controllers/
│   │   │   │   │   └── UserController.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── UserService.ts
│   │   │   │   ├── models/
│   │   │   │   │   └── UserModel.ts
│   │   │   │   ├── routes/
│   │   │   │   │   └── users.routes.ts
│   │   │   │   ├── mappers/
│   │   │   │   │   ├── CreateUserMapper.ts
│   │   │   │   │   └── UpdateUserMapper.ts
│   │   │   │   └── types/
│   │   │   │       └── User.ts
│   │   │   ├── web-manager/
│   │   │   │   ├── controllers/
│   │   │   │   │   └── ManagerController.ts
│   │   │   │   ├── services/
│   │   │   │   │   └── ManagerService.ts
│   │   │   │   ├── models/
│   │   │   │   │   └── ManagerModel.ts
│   │   │   │   ├── routes/
│   │   │   │   │   └── manager.routes.ts
│   │   │   │   └── mappers/
│   │   │   │       └── DashboardMapper.ts
│   │   │   └── public/
│   │   │       ├── controllers/
│   │   │       │   └── PublicController.ts
│   │   │       ├── routes/
│   │   │       │   └── public.routes.ts
│   │   │       └── services/
│   │   │           └── PublicService.ts
│   │   ├── routes/
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   ├── generateToken.ts
│   │   │   └── hashPassword.ts
│   │   └── types/
│   │   │   └── RequestWithUser.ts
│   │   └── __tests__/
│   │       ├── unit/
│   │       │   ├── AuthService.test.ts
│   │       │   └── UserService.test.ts
│   │       ├── integration/
│   │       │   ├── auth.routes.test.ts
│   │       │   └── users.routes.test.ts
│   │       └── setup/
│   │           └── test-setup.ts
│   └── dist/
│
├── frontend/
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── public/
│   │   └── favicon.ico
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── assets/
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Header.tsx
│       │   │   └── Footer.tsx
│       │   └── common/
│       │       ├── Button.tsx
│       │       └── Input.tsx
│       ├── contexts/
│       │   └── AuthContext.tsx
│       ├── hooks/
│       │   └── useAuth.ts
│       ├── routes/
│       │   ├── AppRoutes.tsx
│       │   ├── PublicRoutes.tsx
│       │   └── PrivateRoutes.tsx
│       ├── services/
│       │   ├── api.ts
│       │   └── auth.service.ts
│       ├── modules/
│       │   ├── web-home/
│       │   │   ├── pages/
│       │   │   │   ├── Home.tsx
│       │   │   │   ├── About.tsx
│       │   │   │   └── Contact.tsx
│       │   │   └── components/
│       │   ├── web-auth/
│       │   │   ├── pages/
│       │   │   │   └── Login.tsx
│       │   │   ├── components/
│       │   │   ├── services/
│       │   │   └── types/
│       │   ├── web-users/
│       │   │   ├── pages/
│       │   │   │   ├── UsersList.tsx
│       │   │   │   ├── UserCreate.tsx
│       │   │   │   └── UserEdit.tsx
│       │   │   ├── components/
│       │   │   ├── services/
│       │   │   └── types/
│       │   └── web-manager/
│       │       ├── pages/
│       │       │   └── Dashboard.tsx
│       │       ├── components/
│       │       ├── services/
│       │       └── types/
│       ├── utils/
│       │   └── global.css
│       └── types/
│           └── index.ts
│
├── docs/
│   ├── API.md
│   ├── ARCHITECTURE.md
│   ├── AUTH.md
│   ├── DATABASE.md
│   ├── DEPLOY.md
│   ├── ENVIRONMENT.md
│   ├── INSTALL.md
│   ├── MODULES.md
│   ├── PROJECT-STRUCTURE.md
│   ├── ROUTES.md
│   ├── SECURITY.md
│   └── TESTS.md
│
├── .env.example
├── .gitignore
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```