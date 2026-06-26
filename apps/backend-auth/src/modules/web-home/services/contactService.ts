import { AppError } from '@project/backend-core'
import { mapContactEntity, mapCreateContactDTOToDb, mapUpdateContactDTOToDb } from '../mappers/contactMapper'
import { ContactModel } from '../models/contactModel'
import { CreateContactDTO, UpdateContactDTO } from '../types/contactTypes'
import { CONTACT_MESSAGES } from '../constants/messages'

export class ContactService {
  constructor(private readonly contactModel: ContactModel) {}

  async getAll() {
    const contacts = await this.contactModel.findAll()
    return contacts.map(mapContactEntity)
  }

  async getById(id: number) {
    const contact = await this.contactModel.findById(id)

    if (!contact) {
      throw new AppError(CONTACT_MESSAGES.NOT_FOUND, 404)
    }

    return mapContactEntity(contact)
  }

  async getActive() {
    const contact = await this.contactModel.findActive()

    if (!contact) {
      throw new AppError(CONTACT_MESSAGES.ACTIVE_NOT_FOUND, 404)
    }

    return mapContactEntity(contact)
  }

  async create(payload: CreateContactDTO) {
    if (payload.isActive) {
      await this.contactModel.deactivateAll()
    }

    const mappedPayload = mapCreateContactDTOToDb(payload)
    const created = await this.contactModel.create(mappedPayload)

    if (!created) {
      throw new AppError(CONTACT_MESSAGES.CREATE_ERROR, 500)
    }

    return mapContactEntity(created)
  }

  async update(id: number, payload: UpdateContactDTO) {
    const existing = await this.contactModel.findById(id)

    if (!existing) {
      throw new AppError(CONTACT_MESSAGES.ACTIVE_NOT_FOUND, 404)
    }

    if (payload.isActive === true) {
      await this.contactModel.deactivateAll()
    }

    const mappedPayload = mapUpdateContactDTOToDb(payload)
    const updated = await this.contactModel.update(id, mappedPayload)

    if (!updated) {
      throw new AppError(CONTACT_MESSAGES.UPDATE_ERROR, 500)
    }

    return mapContactEntity(updated)
  }

  async delete(id: number) {
    const existing = await this.contactModel.findById(id)

    if (!existing) {
      throw new AppError(CONTACT_MESSAGES.NOT_FOUND, 404)
    }

    const changes = await this.contactModel.delete(id)

    if (!changes) {
      throw new AppError(CONTACT_MESSAGES.DELETE_ERROR, 500)
    }

    return {
      id,
      deleted: true,
    }
  }
}