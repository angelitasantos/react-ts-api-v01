import { Router } from 'express'
import { HomeModel } from '../models/homeModel'
import { HomeService } from '../services/homeService'
import { HomeController } from '../controllers/homeController'
import { authMiddleware, roleMiddleware } from '@project/backend-core'

const router = Router()

const homeModel = new HomeModel()
const homeService = new HomeService(homeModel)
const homeController = new HomeController(homeService)

router.get('/', homeController.getAll)
router.get('/active', homeController.getActive)
router.get('/:id', homeController.getById)

router.post(
  '/',
  authMiddleware,
  roleMiddleware(['admin']),
  homeController.create,
)

router.put(
  '/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  homeController.update,
)

router.delete(
  '/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  homeController.delete,
)

export default router