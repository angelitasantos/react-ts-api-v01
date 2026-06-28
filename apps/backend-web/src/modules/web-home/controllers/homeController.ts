import { NextFunction, Request, Response } from 'express'
import { HomeService } from '../services/homeService'
import { successResponse } from '@project/backend-core'
import { HOME_MESSAGES } from '../constants/messages'

export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.homeService.getAll()
      return res.status(200).json(successResponse(data))
    } catch (error) {
      return next(error)
    }
  }

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id)
      const data = await this.homeService.getById(id)
      return res.status(200).json(successResponse(data))
    } catch (error) {
      return next(error)
    }
  }

  getActive = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.homeService.getActive()
      return res.status(200).json(successResponse(data))
    } catch (error) {
      return next(error)
    }
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.homeService.create(req.body)
      return res.status(201).json(successResponse(data, HOME_MESSAGES.CREATED_SUCCESS))
    } catch (error) {
      return next(error)
    }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id)
      const data = await this.homeService.update(id, req.body)
      return res.status(200).json(successResponse(data, HOME_MESSAGES.UPDATED_SUCCESS))
    } catch (error) {
      return next(error)
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id)
      const data = await this.homeService.delete(id)
      return res.status(200).json(successResponse(data, HOME_MESSAGES.DELETED_SUCCESS))
    } catch (error) {
      return next(error)
    }
  }
}