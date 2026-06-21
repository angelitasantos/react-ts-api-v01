import { createDbConnection } from './createDbConnection'

export const databases = {
  auth: createDbConnection('auth'),
  main: createDbConnection('main'),
}

export type DatabaseName = keyof typeof databases