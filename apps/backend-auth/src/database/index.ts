import { createConnection } from '@project/database'
import { env } from '../config/env'

export const db = createConnection(
    env.database.DB_PATH
)