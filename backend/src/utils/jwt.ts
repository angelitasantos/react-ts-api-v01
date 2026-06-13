import jwt, { Secret, SignOptions } from 'jsonwebtoken'
import { env } from '../config/env'

export interface JwtPayload {
  id: number
  email: string
  role_name: string
}

export function generateToken(payload: JwtPayload) {
  return jwt.sign(
    payload,
    env.JWT_SECRET as Secret,
    {
      expiresIn: env.JWT_EXPIRES_IN as SignOptions['expiresIn'],
    },
  );
}

export function verifyToken(
  token: string): JwtPayload {
  return jwt.verify(token, env.JWT_SECRET) as JwtPayload
}