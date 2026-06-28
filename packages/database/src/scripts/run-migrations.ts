import fs from 'fs'
import path from 'path'
import { DatabaseConnection } from '../connection/types'
import { GENERAL_MESSAGES } from '@project/shared'

export async function runMigrations(
  db: DatabaseConnection,
  migrationsPath: string,
) {
  const files = fs
    .readdirSync(migrationsPath)
    .filter((file) => file.endsWith('.sql'))
    .sort()

  for (const file of files) {
    const sql = fs.readFileSync(
      path.join(migrationsPath, file),
      'utf-8'
    )

    console.log(`ℹ️ ${GENERAL_MESSAGES.RUNNING}${file}`)
    await db.exec(sql)
  }

  console.log(`migrate: ✅ ${GENERAL_MESSAGES.DEFAULT_MESSAGE_SUCCESS}`)
}
