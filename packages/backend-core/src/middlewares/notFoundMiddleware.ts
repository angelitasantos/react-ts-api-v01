import { Request, Response } from 'express'
import { errorResponse } from '../errors/responseFormatter'
import { SERVER_ERRORS } from '@project/shared'

export function notFoundMiddleware(req: Request, res: Response) {
  return res.status(404).json(errorResponse(SERVER_ERRORS.ROUTE_NOT_FOUND))
}