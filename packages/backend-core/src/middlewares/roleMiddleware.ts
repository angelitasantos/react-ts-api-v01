import { NextFunction, Request, Response } from 'express'
import { AppError, JwtPayload } from '@project/backend-core'
import { 
  ACCESS_DENIED, 
  UNAUTHENTICATED_USER 
} from '@project/shared'

export function roleMiddleware(
  allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as JwtPayload

    if (!user) {
      return next(new AppError(UNAUTHENTICATED_USER, 401))
    }

    if (!allowedRoles.includes(user.role_name)) {
      return next(
        new AppError(ACCESS_DENIED, 403),
      )
    }

    return next()
  }
}