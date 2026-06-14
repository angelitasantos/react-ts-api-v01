import fs from 'fs'
import path from 'path'
import { db } from './connection'
import { DEFAULT_MESSAGE_SUCCESS, RUNNING, RUNNING_ERROR } from '../shared/constants/index'

export async function runMigrations() {
  const migrationsPath = path.resolve(__dirname, 'migrations')
  const files = fs
    .readdirSync(migrationsPath)
    .filter((file) => file.endsWith('.sql'))
    .sort()

  for (const file of files) {
    const filePath = path.join(migrationsPath, file)
    const sql = fs.readFileSync(filePath, 'utf-8')

    console.log(`${RUNNING}${file}`)
    await db.exec(sql)
  }

  console.log(`migrate: ${DEFAULT_MESSAGE_SUCCESS}`)
}

if (require.main === module) {
  runMigrations().catch((error) => {
    console.error(RUNNING_ERROR, error)
    process.exit(1)
  })
}