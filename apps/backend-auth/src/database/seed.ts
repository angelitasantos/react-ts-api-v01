import { seedDatabase } from '@project/database'
import { GENERAL_MESSAGES, SERVER_ERRORS } from '@project/shared'

async function seed() {
  try {
    console.log(`${GENERAL_MESSAGES.RUNNING}Seed Database...`)

    await seedDatabase()

    process.exit(0)
  } catch (error) {
    console.error(SERVER_ERRORS.RUNNING_ERROR, error)
    process.exit(1)
  }
}

seed()