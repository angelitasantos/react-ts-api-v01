import { NextFunction, Request, Response } from 'express'
import { ContactFormService } from '../services/contactFormService'
import { successResponse } from '@project/backend-core'
import { CONTACT_FORM_MESSAGES } from '../constants/messages'

export class ContactFormController {
  constructor(private readonly contactFormService: ContactFormService) {}

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.contactFormService.getAll()
      return res.status(200).json(successResponse(data))
    } catch (error) {
      return next(error)
    }
  }

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id)
      const data = await this.contactFormService.getById(id)
      return res.status(200).json(successResponse(data))
    } catch (error) {
      return next(error)
    }
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.contactFormService.create(req.body)
      return res.status(201).json(successResponse(data, CONTACT_FORM_MESSAGES.CREATED_SUCCESS))
    } catch (error) {
      return next(error)
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id)
      const data = await this.contactFormService.delete(id)
      return res.status(200).json(successResponse(data, CONTACT_FORM_MESSAGES.DELETED_SUCCESS))
    } catch (error) {
      return next(error)
    }
  }
}