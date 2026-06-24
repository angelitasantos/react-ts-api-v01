import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors/AppError'
import { errorResponse } from '../errors/responseFormatter'
import { SERVER_ERRORS } from '@project/shared'

export function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  console.error(error)

  if (error instanceof AppError) {
    return res.status(error.statusCode).json(errorResponse(error.message))
  }

  return res.status(500).json(errorResponse(SERVER_ERRORS.INTERNAL_SERVER_ERROR))
}