import { createConnection } from './createConnection'

export function createDbConnection(dbPath: string) {
  return createConnection(dbPath)
}