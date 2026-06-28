import { DatabaseConnection } from '../connection/types'
import { GENERAL_MESSAGES } from '@project/shared'

export async function seedDatabase(
  db: DatabaseConnection,
  seeds: Array<(db: DatabaseConnection) => Promise<void>>,
) {

  for (const seed of seeds) {
    await seed(db)
  }

  console.log(`seed: ✅ ${GENERAL_MESSAGES.DEFAULT_MESSAGE_SUCCESS}`)
}
