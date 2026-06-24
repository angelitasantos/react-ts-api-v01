import { runMigrations } from '@project/database'
import { DB_ERRORS, DB_MESSAGES, GENERAL_MESSAGES } from '@project/shared'

async function migrate() {
  try {
    console.log(`🔄 ${GENERAL_MESSAGES.RUNNING}migrações...`)

    await runMigrations()

    console.log(`✅ ${DB_MESSAGES.DB_CONNECTED_SUCCESS}`)
  } catch (error) {
    console.error(`❌ ${DB_ERRORS.CONNECTING_ERROR}`, error)
    process.exit(1)
  }
}

migrate()