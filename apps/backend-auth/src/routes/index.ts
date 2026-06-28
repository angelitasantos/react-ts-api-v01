import { Router } from 'express'
import { SYSTEM_MESSAGES } from '@project/shared'
import webAuthRoutes from '../modules/web-auth'

const router = Router()

router.get('/', (req, res) => {
  res.send(SYSTEM_MESSAGES.BACKEND_WORKING)
})

router.get('/api/testa_conexao_frontend', (req, res) => {
  res.status(200).json({
    success: true,
    message: SYSTEM_MESSAGES.BACKEND_WORKING,
  })
})

router.use('/api', webAuthRoutes)

export default router