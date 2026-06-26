import { AppError } from '@project/backend-core'
import {
  mapCreateHomeDTOToDb,
  mapHomeEntity,
  mapUpdateHomeDTOToDb,
} from '../mappers/homeMapper'
import { HomeModel } from '../models/homeModel'
import { CreateHomeDTO, UpdateHomeDTO } from '../types/homeTypes'
import { HOME_MESSAGES } from '../constants/messages'

export class HomeService {
  constructor(private readonly homeModel: HomeModel) {}

  async getAll() {
    const homes = await this.homeModel.findAll()
    return homes.map(mapHomeEntity)
  }

  async getById(id: number) {
    const home = await this.homeModel.findById(id)

    if (!home) {
      throw new AppError(HOME_MESSAGES.NOT_FOUND, 404)
    }

    return mapHomeEntity(home)
  }

  async getActive() {
    const home = await this.homeModel.findActive()

    if (!home) {
      throw new AppError(HOME_MESSAGES.ACTIVE_NOT_FOUND, 404)
    }

    return mapHomeEntity(home)
  }

  async create(payload: CreateHomeDTO) {
    if (payload.isActive) {
      await this.homeModel.deactivateAll()
    }

    const mappedPayload = mapCreateHomeDTOToDb(payload)
    const created = await this.homeModel.create(mappedPayload)

    if (!created) {
      throw new AppError(HOME_MESSAGES.CREATE_ERROR, 500)
    }

    return mapHomeEntity(created)
  }

  async update(id: number, payload: UpdateHomeDTO) {
    const existing = await this.homeModel.findById(id)

    if (!existing) {
      throw new AppError(HOME_MESSAGES.NOT_FOUND, 404)
    }

    if (payload.isActive === true) {
      await this.homeModel.deactivateAll()
    }

    const mappedPayload = mapUpdateHomeDTOToDb(payload)
    const updated = await this.homeModel.update(id, mappedPayload)

    if (!updated) {
      throw new AppError(HOME_MESSAGES.UPDATE_ERROR, 500)
    }

    return mapHomeEntity(updated)
  }

  async delete(id: number) {
    const existing = await this.homeModel.findById(id)

    if (!existing) {
      throw new AppError(HOME_MESSAGES.NOT_FOUND, 404)
    }

    const changes = await this.homeModel.delete(id)

    if (!changes) {
      throw new AppError(HOME_MESSAGES.DELETE_ERROR, 500)
    }

    return {
      id,
      deleted: true,
    }
  }
}