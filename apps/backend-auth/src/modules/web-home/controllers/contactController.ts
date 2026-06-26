import { NextFunction, Request, Response } from 'express'
import { ContactService } from '../services/contactService'
import { successResponse } from '@project/backend-core'
import { CONTACT_MESSAGES } from '../constants/messages'

export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.contactService.getAll()
      return res.status(200).json(successResponse(data))
    } catch (error) {
      return next(error)
    }
  }

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id)
      const data = await this.contactService.getById(id)
      return res.status(200).json(successResponse(data))
    } catch (error) {
      return next(error)
    }
  }

  getActive = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.contactService.getActive()
      return res.status(200).json(successResponse(data))
    } catch (error) {
      return next(error)
    }
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.contactService.create(req.body)
      return res.status(201).json(successResponse(data, CONTACT_MESSAGES.CREATED_SUCCESS))
    } catch (error) {
      return next(error)
    }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id)
      const data = await this.contactService.update(id, req.body)
      return res.status(200).json(successResponse(data, CONTACT_MESSAGES.UPDATED_SUCCESS))
    } catch (error) {
      return next(error)
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id)
      const data = await this.contactService.delete(id)
      return res.status(200).json(successResponse(data, CONTACT_MESSAGES.DELETED_SUCCESS))
    } catch (error) {
      return next(error)
    }
  }
}