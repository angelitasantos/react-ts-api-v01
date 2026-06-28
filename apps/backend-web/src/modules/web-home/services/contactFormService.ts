import { AppError } from '@project/backend-core'
import {
  mapContactFormEntity,
  mapCreateContactFormDTOToDb,
} from '../mappers/contactFormMapper'
import { ContactFormModel } from '../models/contactFormModel'
import { CreateContactFormDTO } from '../types/contactFormTypes'
import { CONTACT_FORM_MESSAGES, HOME_MESSAGES } from '../constants/messages'

export class ContactFormService {
  constructor(private readonly contactFormModel: ContactFormModel) {}

  async getAll() {
    const messages = await this.contactFormModel.findAll()
    return messages.map(mapContactFormEntity)
  }

  async getById(id: number) {
    const message = await this.contactFormModel.findById(id)

    if (!message) {
      throw new AppError(CONTACT_FORM_MESSAGES.NOT_FOUND, 404)
    }

    return mapContactFormEntity(message)
  }

  async create(payload: CreateContactFormDTO) {
    const mappedPayload = mapCreateContactFormDTOToDb(payload)
    const created = await this.contactFormModel.create(mappedPayload)

    if (!created) {
      throw new AppError(HOME_MESSAGES.UPDATE_ERROR, 500)
    }

    return mapContactFormEntity(created)
  }

  async delete(id: number) {
    const existing = await this.contactFormModel.findById(id)

    if (!existing) {
      throw new AppError(CONTACT_FORM_MESSAGES.NOT_FOUND, 404)
    }

    const changes = await this.contactFormModel.delete(id)

    if (!changes) {
      throw new AppError(HOME_MESSAGES.DELETE_ERROR, 500)
    }

    return {
      id,
      deleted: true,
    }
  }
}