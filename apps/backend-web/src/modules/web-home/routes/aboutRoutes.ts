import { Router } from 'express'
import { AboutModel } from '../models/aboutModel'
import { AboutService } from '../services/aboutService'
import { AboutController } from '../controllers/aboutController'
import { authMiddleware, roleMiddleware } from '@project/backend-core'

const router = Router()

const aboutModel = new AboutModel()
const aboutService = new AboutService(aboutModel)
const aboutController = new AboutController(aboutService)

router.get('/', aboutController.getAll)
router.get('/active', aboutController.getActive)
router.get('/:id', aboutController.getById)

router.post(
  '/',
  authMiddleware,
  roleMiddleware(['admin']),
  aboutController.create,
)

router.put(
  '/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  aboutController.update,
)

router.delete(
  '/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  aboutController.delete,
)

export default router