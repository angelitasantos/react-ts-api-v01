import dotenv from 'dotenv'
import path from 'path'
import { LogLevel } from '../logger'

dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
})

export interface CreateEnvOptions {
  defaultPort: number
}

export function createEnv({
  defaultPort,
}: CreateEnvOptions) {

  function required(name: string) {
    const value = process.env[name]

    if (!value) {
      throw new Error(
        `Variável de ambiente ausente: ${name}`,
      )
    }

    return value
  }

  function getNumber(
    value: string | undefined,
    fallback: number,
  ) {
    const number = Number(value)

    return Number.isFinite(number)
      ? number
      : fallback
  }

  function getNodeEnv() {
    switch (process.env.NODE_ENV) {

      case 'production':
      case 'test':
      case 'development':
        return process.env.NODE_ENV

      default:
        return 'development'
    }
  }

  function getLogLevel() {

    switch (process.env.LOG_LEVEL) {

      case LogLevel.INFO:
      case LogLevel.SUCCESS:
      case LogLevel.WARNING:
      case LogLevel.ERROR:
        return process.env.LOG_LEVEL

      default:
        return LogLevel.INFO
    }
  }

  return {
    app: {
      NODE_ENV: getNodeEnv(),
      LOG_LEVEL: getLogLevel(),
      HOST: process.env.HOST ?? 'http://localhost',
      PORT: getNumber(process.env.PORT, defaultPort, ),
    },

    database: {
      DB_PATH: process.env.DB_PATH ?? './data/database.sqlite',
    },

    auth: {
      JWT_SECRET: required('JWT_SECRET'),
      JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '1d',
    },
  }
}