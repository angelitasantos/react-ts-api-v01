import { resetDatabase } from '@project/database'
import { RUNNING, RUNNING_ERROR } from '@project/shared'

async function reset() {
  try {
    console.log(`${RUNNING}Reset Database...`)

    await resetDatabase()

    process.exit(0)
  } catch (error) {
    console.error(RUNNING_ERROR, error)
    process.exit(1)
  }
}

reset()