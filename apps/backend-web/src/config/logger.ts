import { env } from './env'
import { AppLogger, LogLevel } from '@project/backend-core'

AppLogger.configure({
  environment: env.app.NODE_ENV,
  level: LogLevel.INFO,
})