import { createDbConnection } from './createDbConnection'

export const databases = {
  auth: createDbConnection('data/auth.sqlite'),
}

export type DatabaseName = keyof typeof databases