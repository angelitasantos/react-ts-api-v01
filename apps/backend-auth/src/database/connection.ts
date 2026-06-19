import sqlite3 from 'sqlite3'
import { env } from '../config/env'
import { DB_CONNECTED_SUCCESS, DB_CONNECTING_ERROR } from '../shared/constants/index'

sqlite3.verbose()

console.log('Caminho do banco:', env.DB_PATH)

const database = new sqlite3.Database(env.DB_PATH, (error) => {
  if (error) {
    console.error(DB_CONNECTING_ERROR, error.message)
  } else {
    console.log(DB_CONNECTED_SUCCESS)
  }
})

export const db = {
  run: (sql: string, params: unknown[] = []) =>
    new Promise<{ lastID: number; changes: number }>((resolve, reject) => {
      database.run(sql, params, function (error) {
        if (error) {
          reject(error)
        } else {
          resolve({
            lastID: this.lastID,
            changes: this.changes,
          })
        }
      })
    }),

  get: <T>(sql: string, params: unknown[] = []) =>
    new Promise<T | undefined>((resolve, reject) => {
      database.get(sql, params, (error, row) => {
        if (error) {
          reject(error)
        } else {
          resolve(row as T | undefined)
        }
      })
    }),

  all: <T>(sql: string, params: unknown[] = []) =>
    new Promise<T[]>((resolve, reject) => {
      database.all(sql, params, (error, rows) => {
        if (error) {
          reject(error)
        } else {
          resolve(rows as T[])
        }
      })
    }),

  exec: (sql: string) =>
    new Promise<void>((resolve, reject) => {
      database.exec(sql, (error) => {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      })
    }),
}