import { NextFunction, Request, Response } from 'express'
import { AuthService } from '../services/authService'
import { successResponse } from '../../../utils/responseFormatter'
import {  
  LOGIN_SUCCESS, 
} from '../../../constants/index'

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.authService.login(req.body)
      return res.status(200).json(successResponse(data, LOGIN_SUCCESS))
    } catch (error) {
      return next(error)
    }
  }
}