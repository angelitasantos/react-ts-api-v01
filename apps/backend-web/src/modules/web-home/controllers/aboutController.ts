import { NextFunction, Request, Response } from 'express'
import { AboutService } from '../services/aboutService'
import { successResponse } from '@project/backend-core'
import { ABOUT_MESSAGES } from '../constants/messages'

export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.aboutService.getAll()
      return res.status(200).json(successResponse(data))
    } catch (error) {
      return next(error)
    }
  }

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id)
      const data = await this.aboutService.getById(id)
      return res.status(200).json(successResponse(data))
    } catch (error) {
      return next(error)
    }
  }

  getActive = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.aboutService.getActive()
      return res.status(200).json(successResponse(data))
    } catch (error) {
      return next(error)
    }
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.aboutService.create(req.body)
      return res.status(201).json(successResponse(data, ABOUT_MESSAGES.CREATED_SUCCESS))
    } catch (error) {
      return next(error)
    }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id)
      const data = await this.aboutService.update(id, req.body)
      return res.status(200).json(successResponse(data, ABOUT_MESSAGES.UPDATED_SUCCESS))
    } catch (error) {
      return next(error)
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id)
      const data = await this.aboutService.delete(id)
      return res.status(200).json(successResponse(data, ABOUT_MESSAGES.DELETED_SUCCESS))
    } catch (error) {
      return next(error)
    }
  }
}