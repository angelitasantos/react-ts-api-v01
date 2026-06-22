import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors/AppError'
import { verifyToken } from '../utils/jwt'
import { 
  EXPIRED_OR_INVALID_TOKEN, 
  INVALID_TOKEN, 
  TOKEN_NOT_PROVIDED 
} from '@project/shared'

export function authMiddleware(
  req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return next(new AppError(TOKEN_NOT_PROVIDED, 401))
  }

  const [scheme, token] = authHeader.split(' ')

  if (scheme !== 'Bearer' || !token) {
    return next(new AppError(INVALID_TOKEN, 401))
  }

  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET as string)
    req.user = decoded
    return next()
  } catch {
    return next(new AppError(EXPIRED_OR_INVALID_TOKEN, 401))
  }
}