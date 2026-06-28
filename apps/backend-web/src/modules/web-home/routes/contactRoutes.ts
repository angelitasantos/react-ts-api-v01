import { Router } from 'express'
import { ContactModel } from '../models/contactModel'
import { ContactService } from '../services/contactService'
import { ContactController } from '../controllers/contactController'
import { authMiddleware, roleMiddleware } from '@project/backend-core'

const router = Router()

const contactModel = new ContactModel()
const contactService = new ContactService(contactModel)
const contactController = new ContactController(contactService)

router.get('/', contactController.getAll)
router.get('/active', contactController.getActive)
router.get('/:id', contactController.getById)

router.post(
  '/',
  authMiddleware,
  roleMiddleware(['admin']),
  contactController.create,
)

router.put(
  '/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  contactController.update,
)

router.delete(
  '/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  contactController.delete,
)

export default router