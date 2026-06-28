import { env } from '../config/env'
import { AppLogger, AppModule } from '@project/backend-core'
import { DB_ERRORS, GENERAL_MESSAGES } from '@project/shared'
import { 
  createDbConnection,
  databasePaths,
  runMigrations,
} from '@project/database'

const db = createDbConnection(env.database.DB_PATH)

async function migrate() {
  try {
    AppLogger.info(`${GENERAL_MESSAGES.RUNNING}migrações...`, AppModule.DATABASE)

    await runMigrations(db, databasePaths.authMigrations)
    
    process.exit(0)
  } catch (error) {
    AppLogger.error(DB_ERRORS.CONNECTING_ERROR, AppModule.DATABASE, error)
    process.exit(1)
  }
}

migrate()