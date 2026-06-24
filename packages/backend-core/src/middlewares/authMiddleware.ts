import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors/AppError'
import { verifyToken } from '../utils/jwt'
import { AUTH_ERRORS } from '@project/shared'

export function authMiddleware(
  req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return next(new AppError(AUTH_ERRORS.TOKEN_NOT_PROVIDED, 401))
  }

  const [scheme, token] = authHeader.split(' ')

  if (scheme !== 'Bearer' || !token) {
    return next(new AppError(AUTH_ERRORS.INVALID_TOKEN, 401))
  }

  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET as string)
    req.user = decoded
    return next()
  } catch {
    return next(new AppError(AUTH_ERRORS.EXPIRED_OR_INVALID_TOKEN, 401))
  }
}