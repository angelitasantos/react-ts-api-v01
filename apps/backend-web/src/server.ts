import app from './app'
import { env } from './config/env'
import { db } from './database'
import { AppLogger, AppModule } from '@project/backend-core'
import { DB_ERRORS, DB_MESSAGES, SYSTEM_MESSAGES } from '@project/shared'
import './config/logger'

const PORT = env.app.PORT

async function startServer() {
  try {
    AppLogger.warning(`🔌 ${DB_MESSAGES.TESTING_DATABASE_CONNECTION}`, AppModule.SERVER)

    await db.testConnection()

    AppLogger.info(`📦 DB_PATH: ${env.database.DB_PATH}`, AppModule.SERVER)
    AppLogger.warning('Iniciando servidor ...', AppModule.SERVER)
    AppLogger.info(`PORT = ${PORT}`, AppModule.SERVER)

    app.listen(PORT, () => {
      AppLogger.success(SYSTEM_MESSAGES.SERVER_RUNNING, AppModule.SERVER)
      AppLogger.info(`Ambiente: ${env.app.NODE_ENV}`, AppModule.SERVER)
    })
  } catch (error) {
    AppLogger.error(DB_ERRORS.CONNECTING_ERROR, AppModule.SERVER, error)
    process.exit(1)
  }
}

startServer()