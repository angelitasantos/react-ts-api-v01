import { runMigrations } from '@project/database'
import { DB_CONNECTED_SUCCESS, DB_CONNECTING_ERROR, RUNNING } from '@project/shared'

async function migrate() {
  try {
    console.log(`🔄 ${RUNNING}migrações...`)

    await runMigrations()

    console.log(`✅ ${DB_CONNECTED_SUCCESS}`)
  } catch (error) {
    console.error(`❌ ${DB_CONNECTING_ERROR}`, error)
    process.exit(1)
  }
}

migrate()