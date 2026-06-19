import { Request, Response } from 'express'
import { errorResponse } from '../utils/responseFormatter'
import { ROUTE_NOT_FOUND } from '../constants/index'

export function notFoundMiddleware(req: Request, res: Response) {
  return res.status(404).json(errorResponse(ROUTE_NOT_FOUND))
}