import {
  AboutEntity,
  AboutValueItem,
  CreateAboutDTO,
  UpdateAboutDTO,
} from '../types/aboutTypes'

export function mapAboutEntity(entity: AboutEntity) {
  return {
    id: entity.id,
    eyebrow: entity.eyebrow,
    title: entity.title,
    description: entity.description,
    imageUrl: entity.image_url || undefined,
    valuesTitle: entity.values_title,
    values: JSON.parse(entity.values_json) as AboutValueItem[],
    missionTitle: entity.mission_title,
    missionDescription: entity.mission_description,
    isActive: Boolean(entity.is_active),
    createdAt: entity.created_at,
    updatedAt: entity.updated_at,
  }
}

export function mapCreateAboutDTOToDb(payload: CreateAboutDTO) {
  return {
    eyebrow: payload.eyebrow,
    title: payload.title,
    description: payload.description,
    image_url: payload.imageUrl ?? null,
    values_title: payload.valuesTitle,
    values_json: JSON.stringify(payload.values ?? []),
    mission_title: payload.missionTitle,
    mission_description: payload.missionDescription,
    is_active: payload.isActive ? 1 : 0,
  }
}

export function mapUpdateAboutDTOToDb(payload: UpdateAboutDTO) {
  const mapped: Record<string, unknown> = {}

  if (payload.eyebrow !== undefined) mapped.eyebrow = payload.eyebrow
  if (payload.title !== undefined) mapped.title = payload.title
  if (payload.description !== undefined) mapped.description = payload.description
  if (payload.imageUrl !== undefined) mapped.image_url = payload.imageUrl
  if (payload.valuesTitle !== undefined) mapped.values_title = payload.valuesTitle
  if (payload.values !== undefined) mapped.values_json = JSON.stringify(payload.values)
  if (payload.missionTitle !== undefined) mapped.mission_title = payload.missionTitle
  if (payload.missionDescription !== undefined) mapped.mission_description = payload.missionDescription
  if (payload.isActive !== undefined) mapped.is_active = payload.isActive ? 1 : 0

  return mapped
}