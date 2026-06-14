import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import routes from './routes'
import { notFoundMiddleware } from './shared/middlewares/notFoundMiddleware'
import { errorMiddleware } from './shared/middlewares/errorMiddleware'

const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

app.use('/', routes)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

export default app