import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
})

type NodeEnv = 'development' | 'production' | 'test'

function getNodeEnv(): NodeEnv {
  const value = process.env.NODE_ENV

  if (
    value === 'development' ||
    value === 'production' ||
    value === 'test'
  ) {
    return value
  }

  return 'development'
}

function getNumber(value: string | undefined, defaultValue: number) {
  const number = Number(value)

  return Number.isFinite(number)
    ? number
    : defaultValue
}

function required(name: string) {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Variável de ambiente ausente: ${name}`)
  }

  return value
}

export const env = {
  app: {
    NODE_ENV: getNodeEnv(),
    HOST: process.env.HOST ?? 'http://localhost:',
    PORT: getNumber(process.env.PORT, 3001),
  },
  database: {
    DB_PATH: process.env.DB_PATH ?? './database/database.sqlite',
  },
  auth: {
    JWT_SECRET: required('JWT_SECRET'),
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '1d',
  }
}