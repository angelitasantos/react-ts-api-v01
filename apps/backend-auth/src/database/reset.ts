import { resetDatabase } from '@project/database'
import { GENERAL_MESSAGES, SERVER_ERRORS } from '@project/shared'

async function reset() {
  try {
    console.log(`${GENERAL_MESSAGES.RUNNING}Reset Database...`)

    await resetDatabase()

    process.exit(0)
  } catch (error) {
    console.error(SERVER_ERRORS.RUNNING_ERROR, error)
    process.exit(1)
  }
}

reset()