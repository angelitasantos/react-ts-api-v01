import rateLimit from 'express-rate-limit'
import { AUTH_ERRORS } from '@project/shared'

export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: AUTH_ERRORS.RATE_LIMIT,
  },
})