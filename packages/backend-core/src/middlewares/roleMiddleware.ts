import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors/AppError'
import { JwtPayload } from '../utils/jwt'
import { AUTH_ERRORS } from '@project/shared'

export function roleMiddleware(
  allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as JwtPayload

    if (!user) {
      return next(new AppError(AUTH_ERRORS.UNAUTHENTICATED_USER, 401))
    }

    if (!allowedRoles.includes(user.role_name)) {
      return next(
        new AppError(AUTH_ERRORS.ACCESS_DENIED, 403),
      )
    }

    return next()
  }
}