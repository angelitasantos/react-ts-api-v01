import { seedDatabase } from '@project/database'
import { RUNNING, RUNNING_ERROR } from '@project/shared'

async function seed() {
  try {
    console.log(`${RUNNING}Seed Database...`)

    await seedDatabase()

    process.exit(0)
  } catch (error) {
    console.error(RUNNING_ERROR, error)
    process.exit(1)
  }
}

seed()