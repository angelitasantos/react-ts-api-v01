import { 
  ContactEntity, 
  CreateContactDTO, 
  UpdateContactDTO 
} from '../types/contactTypes'

export function mapContactEntity(entity: ContactEntity) {
  return {
    id: entity.id,
    eyebrow: entity.eyebrow,
    title: entity.title,
    description: entity.description,
    infoTitle: entity.info_title,
    email: entity.email,
    phone: entity.phone,
    address: entity.address,
    isActive: Boolean(entity.is_active),
    createdAt: entity.created_at,
    updatedAt: entity.updated_at,
  }
}

export function mapCreateContactDTOToDb(payload: CreateContactDTO) {
  return {
    eyebrow: payload.eyebrow,
    title: payload.title,
    description: payload.description,
    info_title: payload.infoTitle,
    email: payload.email,
    phone: payload.phone,
    address: payload.address,
    is_active: payload.isActive ? 1 : 0,
  }
}

export function mapUpdateContactDTOToDb(payload: UpdateContactDTO) {
  const mapped: Record<string, unknown> = {}

  if (payload.eyebrow !== undefined) mapped.eyebrow = payload.eyebrow
  if (payload.title !== undefined) mapped.title = payload.title
  if (payload.description !== undefined) mapped.description = payload.description
  if (payload.infoTitle !== undefined) mapped.info_title = payload.infoTitle
  if (payload.email !== undefined) mapped.email = payload.email
  if (payload.phone !== undefined) mapped.phone = payload.phone
  if (payload.address !== undefined) mapped.address = payload.address
  if (payload.isActive !== undefined) mapped.is_active = payload.isActive ? 1 : 0

  return mapped
}