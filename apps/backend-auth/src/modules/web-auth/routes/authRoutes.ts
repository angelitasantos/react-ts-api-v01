import { Router } from 'express'
import { AuthModel } from '../models/authModel'
import { AuthService } from '../services/authService'
import { AuthController } from '../controllers/authController'
import { authMiddleware, roleMiddleware } from '@project/backend-core'
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
})

const router = Router()

const authModel = new AuthModel()
const authService = new AuthService(authModel)
const authController = new AuthController(authService)

router.post('/auth/login', limiter, authController.login)

router.get(
  '/auth/me',
  authMiddleware,
  roleMiddleware(['admin']),
  (req, res) => {
    return res.json(req.user)
  },
)

export default router