import { env } from '../config/env'
import { AppLogger, AppModule } from '@project/backend-core'
import { DB_ERRORS, GENERAL_MESSAGES } from '@project/shared'
import { 
  createDbConnection, 
  seedDatabase, 
  webSeeds 
} from '@project/database'

const db = createDbConnection(env.database.DB_PATH)

async function seed() {
  try {
    AppLogger.info(`${GENERAL_MESSAGES.RUNNING}Seed Database...`, AppModule.DATABASE)

    await seedDatabase(db, webSeeds)
    
    process.exit(0)
  } catch (error) {
    AppLogger.error(DB_ERRORS.CONNECTING_ERROR, AppModule.DATABASE, error)
    process.exit(1)
  }
}

seed()