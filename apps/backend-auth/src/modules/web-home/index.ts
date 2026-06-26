import { Router } from 'express'
import homeRoutes from './routes/homeRoutes'
import aboutRoutes from './routes/aboutRoutes'
import contactRoutes from './routes/contactRoutes'
import contactFormRoutes from './routes/contactFormRoutes'

const router = Router()

router.use('/home', homeRoutes)
router.use('/about', aboutRoutes)
router.use('/contact', contactRoutes)
router.use('/contact-form', contactFormRoutes)

export default router