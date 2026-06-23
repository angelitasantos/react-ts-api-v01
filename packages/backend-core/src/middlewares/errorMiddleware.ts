import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors/AppError'
import { errorResponse } from '../errors/responseFormatter'
import { INTERNAL_SERVER_ERROR } from '@project/shared'

export function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
) {
  console.error(error)

  if (error instanceof AppError) {
    return res.status(error.statusCode).json(errorResponse(error.message))
  }

  return res.status(500).json(errorResponse(INTERNAL_SERVER_ERROR))
}