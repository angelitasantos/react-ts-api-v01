import { JwtPayload } from '@project/backend-core'

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload
    }
  }
}

export {}