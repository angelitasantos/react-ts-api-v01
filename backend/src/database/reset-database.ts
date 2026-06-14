import { db } from './connection'
import { runMigrations } from './run-migrations'
import { seedDatabase } from './seed-database'
import { DEFAULT_MESSAGE_SUCCESS, RUNNING, RUNNING_ERROR, } from '../shared/constants'

async function resetDatabase() {
  try {
    console.log(`${RUNNING}Reset Database...`)

    await db.exec(`
      DROP TABLE IF EXISTS contact_form;
      DROP TABLE IF EXISTS contact;
      DROP TABLE IF EXISTS about;
      DROP TABLE IF EXISTS home;
    `)

    console.log('Tabelas removidas.')

    await runMigrations()

    await seedDatabase()

    console.log(`reset-db: ${DEFAULT_MESSAGE_SUCCESS}`)

    process.exit(0)
  } catch (error) {
    console.error(RUNNING_ERROR, error)
    process.exit(1)
  }
}

resetDatabase()