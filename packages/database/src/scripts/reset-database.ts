import { DatabaseConnection } from '../connection/types'
import { runMigrations } from './run-migrations'
import { seedDatabase } from './seed-database'
import { GENERAL_MESSAGES, SERVER_ERRORS, } from '@project/shared'

export async function resetDatabase(
  db: DatabaseConnection,
  dropTablesSql: string,
  migrationsPath: string,
  seeds: Array<(db: DatabaseConnection) => Promise<void>>,
) {
  try {
    await db.exec(dropTablesSql)
    console.log('⚠️ Tabelas removidas.')

    await runMigrations(db, migrationsPath)
    await seedDatabase(db, seeds)
    console.log(`reset-db: ✅ ${GENERAL_MESSAGES.DEFAULT_MESSAGE_SUCCESS}`)

    process.exit(0)
  } catch (error) {
    console.error(`❌ ${SERVER_ERRORS.RUNNING_ERROR}`, error)
    process.exit(1)
  }
}
