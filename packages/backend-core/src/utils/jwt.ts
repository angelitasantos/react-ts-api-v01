import jwt, { Secret, SignOptions } from 'jsonwebtoken'

export interface JwtConfig {
  secret: string
  expiresIn: SignOptions['expiresIn']
}

export interface JwtPayload {
  id: number
  email: string
  role_name: string
}

export function generateToken(
  payload: JwtPayload, config: JwtConfig,
) {
  return jwt.sign(payload, config.secret as Secret, {
    expiresIn: config.expiresIn,
  })
}

export function verifyToken(
  token: string, secret: string,
) {
  return jwt.verify(token, secret as Secret) as JwtPayload
}