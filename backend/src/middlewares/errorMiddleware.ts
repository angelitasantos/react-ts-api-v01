import { NextFunction, Request, Response } from 'express';
import { errorResponse } from '../utils/responseFormatter';
import { AppError } from '../utils/AppError';
import { INTERNAL_SERVER_ERROR } from '../constants/index';

export function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error(error);

  if (error instanceof AppError) {
    return res.status(error.statusCode).json(errorResponse(error.message));
  };

  return res.status(500).json(errorResponse(INTERNAL_SERVER_ERROR));
};