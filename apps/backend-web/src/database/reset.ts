import { env } from '../config/env'
import { AppLogger, AppModule } from '@project/backend-core'
import { DB_ERRORS, GENERAL_MESSAGES } from '@project/shared'
import { 
  createDbConnection,
  databasePaths,
  resetDatabase,
  webDropTables,
  webSeeds,
} from '@project/database'

const db = createDbConnection(env.database.DB_PATH)

async function reset() {
  try {
    AppLogger.info(`${GENERAL_MESSAGES.RUNNING}Reset Database...`, AppModule.DATABASE)

    await resetDatabase(
      db,
      webDropTables,
      databasePaths.webMigrations,
      webSeeds,
    )

    process.exit(0)
  } catch (error) {
    AppLogger.error(DB_ERRORS.CONNECTING_ERROR, AppModule.DATABASE, error)
    process.exit(1)
  }
}

reset()