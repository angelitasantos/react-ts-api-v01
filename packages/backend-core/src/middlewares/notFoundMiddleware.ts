import { Request, Response } from 'express'
import { errorResponse } from '@project/backend-core'
import { ROUTE_NOT_FOUND } from '@project/shared'

export function notFoundMiddleware(req: Request, res: Response) {
  return res.status(404).json(errorResponse(ROUTE_NOT_FOUND))
}