import { JwtConfig } from '@project/backend-core'
import { env } from './env'
import { StringValue } from 'ms'

export const jwtConfig: JwtConfig = {
  secret: env.auth.JWT_SECRET,
  expiresIn: env.auth.JWT_EXPIRES_IN as StringValue,
}