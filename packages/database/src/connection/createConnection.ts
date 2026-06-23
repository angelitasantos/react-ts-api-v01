import sqlite3 from 'sqlite3'
import {
  DB_CONNECTED_SUCCESS,
  DB_CONNECTING_ERROR,
} from '@project/shared'
import { DatabaseConnection } from './types'

sqlite3.verbose()

export function createConnection(dbPath: string): DatabaseConnection {
  console.log('Caminho do banco:', dbPath)

  const database = new sqlite3.Database(dbPath, (error) => {
    if (error) {
      console.error(DB_CONNECTING_ERROR, error.message)
    } else {
      console.log(DB_CONNECTED_SUCCESS)
    }
  })

  return {
    run: (sql, params = []) =>
      new Promise((resolve, reject) => {
        database.run(sql, params, function (error) {
          if (error) return reject(error)

          resolve({
            lastID: this.lastID,
            changes: this.changes,
          })
        })
      }),

    get: <T>(sql: string, params: unknown[] = []) =>
      new Promise<T | undefined>((resolve, reject) => {
        database.get(sql, params, (error, row: unknown) => {
          if (error) return reject(error)
          resolve(row as T | undefined)
        })
      }),

    all: <T>(sql: string, params: unknown[] = []) =>
      new Promise<T[]>((resolve, reject) => {
        database.all(sql, params, (error, rows: unknown[]) => {
          if (error) return reject(error)
          resolve(rows as T[])
        })
      }),

    exec: (sql) =>
      new Promise((resolve, reject) => {
        database.exec(sql, (error) => {
          if (error) return reject(error)
          resolve()
        })
      }),

    close: () =>
      new Promise((resolve, reject) => {
        database.close((error) => {
          if (error) return reject(error)
          resolve()
        })
      }),

    testConnection: () =>
      new Promise((resolve, reject) => {
        database.get('SELECT 1 AS ok', (err) => {
          if (err) return reject(err)
          resolve()
        })
      }),
  }
}