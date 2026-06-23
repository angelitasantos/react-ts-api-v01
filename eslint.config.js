import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // ==========================================
  // IGNORADOS GLOBAIS
  // ==========================================
  {
    ignores: [
      '**/dist/**',
      '**/coverage/**',
      '**/node_modules/**',
      '**/*.d.ts',
      '**/.turbo/**',
      '**/.vite/**',
    ],
  },

  // ==========================================
  // REGRAS BASE JS + TS
  // ==========================================
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx,mjs}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  // ==========================================
  // FRONTEND (React)
  // ==========================================
  {
    files: ['apps/frontend-*/**/*.{ts,tsx}'],

    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    rules: {
      ...reactHooks.configs.recommended.rules,

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },

  // ==========================================
  // BACKEND + PACKAGES (Node)
  // ==========================================
  {
    files: [
      'apps/backend-auth/**/*.{ts,js}',
      'packages/**/*.{ts,js}',
    ],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // ==========================================
  // BACKEND + PACKAGES (Jest)
  // ==========================================
  {
    files: [
      '**/*.cjs',
      'apps/backend-auth/jest.config.js',
      'scripts/start-dev.js',
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },

    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  // ==========================================
  // SCRIPTS NODE PUROS
  // ==========================================
  {
    files: ['scripts/**/*.{js,mjs}'],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
)
