import app from './app'
import { env } from './config/env'
import { databases } from '@project/database'
import { DB_ERRORS, DB_MESSAGES, SYSTEM_MESSAGES } from '@project/shared'

const db = databases.auth

const PORT = env.app.PORT

async function startServer() {
  try {
    console.log(`🔌 ${DB_MESSAGES.TESTING_DATABASE_CONNECTION}`)

    await db.testConnection()

    console.log(`✅ ${DB_MESSAGES.DB_CONNECTED_SUCCESS}`)
    console.log(`📦 DB_PATH: ${env.database.DB_PATH}`)

    app.listen(PORT, () => {
      console.log(SYSTEM_MESSAGES.SERVER_RUNNING)
      console.log(`Ambiente ... ${env.app.NODE_ENV}`)
    })
  } catch (error) {
    console.error(`❌ ${DB_ERRORS.CONNECTING_ERROR}`, error)
    process.exit(1)
  }
}

startServer()