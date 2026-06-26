import { AppError } from '@project/backend-core'
import {
  mapAboutEntity,
  mapCreateAboutDTOToDb,
  mapUpdateAboutDTOToDb,
} from '../mappers/aboutMapper'
import { AboutModel } from '../models/aboutModel'
import { CreateAboutDTO, UpdateAboutDTO } from '../types/aboutTypes'
import { ABOUT_MESSAGES } from '../constants/messages'

export class AboutService {
  constructor(private readonly aboutModel: AboutModel) {}

  async getAll() {
    const aboutList = await this.aboutModel.findAll()
    return aboutList.map(mapAboutEntity)
  }

  async getById(id: number) {
    const about = await this.aboutModel.findById(id)

    if (!about) {
      throw new AppError(ABOUT_MESSAGES.NOT_FOUND, 404)
    }

    return mapAboutEntity(about)
  }

  async getActive() {
    const about = await this.aboutModel.findActive()

    if (!about) {
      throw new AppError(ABOUT_MESSAGES.ACTIVE_NOT_FOUND, 404)
    }

    return mapAboutEntity(about)
  }

  async create(payload: CreateAboutDTO) {
    if (payload.isActive) {
      await this.aboutModel.deactivateAll()
    }

    const mappedPayload = mapCreateAboutDTOToDb(payload)
    const created = await this.aboutModel.create(mappedPayload)

    if (!created) {
      throw new AppError(ABOUT_MESSAGES.CREATE_ERROR, 500)
    }

    return mapAboutEntity(created)
  }

  async update(id: number, payload: UpdateAboutDTO) {
    const existing = await this.aboutModel.findById(id)

    if (!existing) {
      throw new AppError(ABOUT_MESSAGES.NOT_FOUND, 404)
    }

    if (payload.isActive === true) {
      await this.aboutModel.deactivateAll()
    }

    const mappedPayload = mapUpdateAboutDTOToDb(payload)
    const updated = await this.aboutModel.update(id, mappedPayload)

    if (!updated) {
      throw new AppError(ABOUT_MESSAGES.UPDATE_ERROR, 500)
    }

    return mapAboutEntity(updated)
  }

  async delete(id: number) {
    const existing = await this.aboutModel.findById(id)

    if (!existing) {
      throw new AppError(ABOUT_MESSAGES.NOT_FOUND, 404)
    }

    const changes = await this.aboutModel.delete(id)

    if (!changes) {
      throw new AppError(ABOUT_MESSAGES.DELETE_ERROR, 500)
    }

    return {
      id,
      deleted: true,
    }
  }
}