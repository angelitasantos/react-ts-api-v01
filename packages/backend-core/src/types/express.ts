import 'express'
import { JwtPayload } from '../utils/jwt.js'

declare module 'express' {
  interface Request {
    user?: JwtPayload
  }
}

export {}