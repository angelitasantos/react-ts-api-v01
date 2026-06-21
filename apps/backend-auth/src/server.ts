import app from './app'
import { env } from './config/env'
import { databases } from '@project/database'
import { DB_CONNECTED_SUCCESS, DB_CONNECTING_ERROR, SERVER_RUNNING } from '@project/shared'

const db = databases.auth

const PORT = env.app.PORT

async function startServer() {
  try {
    console.log('🔌 Testing database connection...')

    await db.testConnection()

    console.log(`✅ ${DB_CONNECTED_SUCCESS}`)
    console.log(`📦 DB_PATH: ${env.database.DB_PATH}`)

    app.listen(PORT, () => {
      console.log(SERVER_RUNNING)
      console.log(`Ambiente ... ${env.app.NODE_ENV}`)
    })
  } catch (error) {
    console.error(`❌ ${DB_CONNECTING_ERROR}`, error)
    process.exit(1)
  }
}

startServer()