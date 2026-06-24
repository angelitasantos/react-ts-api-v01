import { databases } from '../connection/database'
import { runMigrations } from './run-migrations'
import { seedDatabase } from './seed-database'
import { GENERAL_MESSAGES, SERVER_ERRORS, } from '@project/shared'

const db = databases.auth

export async function resetDatabase() {
  try {
    console.log(`${GENERAL_MESSAGES.RUNNING}Reset Database...`)

    await db.exec(`
      DROP TABLE IF EXISTS contact_form;
      DROP TABLE IF EXISTS contact;
      DROP TABLE IF EXISTS about;
      DROP TABLE IF EXISTS home;
    `)

    console.log('Tabelas removidas.')

    await runMigrations()

    await seedDatabase()

    console.log(`reset-db: ${GENERAL_MESSAGES.DEFAULT_MESSAGE_SUCCESS}`)

    process.exit(0)
  } catch (error) {
    console.error(SERVER_ERRORS.RUNNING_ERROR, error)
    process.exit(1)
  }
}
