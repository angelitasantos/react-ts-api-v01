import fs from 'fs'
import path from 'path'
import { databases } from '../connection/database'
import { DEFAULT_MESSAGE_SUCCESS, RUNNING, RUNNING_ERROR } from '@project/shared'

const db = databases.auth

export async function runMigrations() {
  const migrationsPath = path.resolve(
    __dirname,
    '../../migrations'
  )

  const files = fs
    .readdirSync(migrationsPath)
    .filter((file) => file.endsWith('.sql'))
    .sort()

  for (const file of files) {
    const sql = fs.readFileSync(
      path.join(migrationsPath, file),
      'utf-8'
    )

    console.log(`${RUNNING}${file}`)
    await db.exec(sql)
  }

  console.log(`migrate: ${DEFAULT_MESSAGE_SUCCESS}`)
}

if (require.main === module) {
  runMigrations().catch(error => {
    console.error(RUNNING_ERROR, error)
    process.exit(1)
  })
}