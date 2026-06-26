import { Router } from 'express'
import { ContactFormModel } from '../models/contactFormModel'
import { ContactFormService } from '../services/contactFormService'
import { ContactFormController } from '../controllers/contactFormController'
import { authMiddleware, roleMiddleware } from '@project/backend-core'

const router = Router()

const contactFormModel = new ContactFormModel()
const contactFormService = new ContactFormService(contactFormModel)
const contactFormController = new ContactFormController(contactFormService)

router.post(
  '/',
  contactFormController.create,
)

router.get(
  '/',
  authMiddleware,
  roleMiddleware(['admin']),
  contactFormController.getAll,
)

router.get(
  '/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  contactFormController.getById,
)

router.delete(
  '/:id',
  authMiddleware,
  roleMiddleware(['admin']),
  contactFormController.delete,
)

export default router