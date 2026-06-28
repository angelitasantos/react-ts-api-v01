import {
  CreateHomeDTO,
  HomeEntity,
  HomeHighlightItem,
  UpdateHomeDTO,
} from '../types/homeTypes'

export function mapHomeEntity(entity: HomeEntity) {
  return {
    id: entity.id,
    title: entity.title,
    subtitle: entity.subtitle,
    description: entity.description,
    primaryButtonText: entity.primary_button_text,
    primaryButtonLink: entity.primary_button_link,
    secondaryButtonText: entity.secondary_button_text || undefined,
    secondaryButtonLink: entity.secondary_button_link || undefined,
    imageUrl: entity.image_url || undefined,
    aboutTitle: entity.about_title,
    aboutDescription: entity.about_description,
    aboutCardTitle: entity.about_card_title,
    aboutCardDescription: entity.about_card_description,
    highlightsTitle: entity.highlights_title,
    highlightsDescription: entity.highlights_description,
    highlights: JSON.parse(entity.highlights) as HomeHighlightItem[],
    isActive: Boolean(entity.is_active),
    createdAt: entity.created_at,
    updatedAt: entity.updated_at,
  }
}

export function mapCreateHomeDTOToDb(payload: CreateHomeDTO) {
  return {
    title: payload.title,
    subtitle: payload.subtitle,
    description: payload.description,
    primary_button_text: payload.primaryButtonText,
    primary_button_link: payload.primaryButtonLink,
    secondary_button_text: payload.secondaryButtonText ?? null,
    secondary_button_link: payload.secondaryButtonLink ?? null,
    image_url: payload.imageUrl ?? null,
    about_title: payload.aboutTitle,
    about_description: payload.aboutDescription,
    about_card_title: payload.aboutCardTitle,
    about_card_description: payload.aboutCardDescription,
    highlights_title: payload.highlightsTitle,
    highlights_description: payload.highlightsDescription,
    highlights: JSON.stringify(payload.highlights ?? []),
    is_active: payload.isActive ? 1 : 0,
  }
}

export function mapUpdateHomeDTOToDb(payload: UpdateHomeDTO) {
  const mapped: Record<string, unknown> = {}

  if (payload.title !== undefined) mapped.title = payload.title
  if (payload.subtitle !== undefined) mapped.subtitle = payload.subtitle
  if (payload.description !== undefined) mapped.description = payload.description
  if (payload.primaryButtonText !== undefined) mapped.primary_button_text = payload.primaryButtonText
  if (payload.primaryButtonLink !== undefined) mapped.primary_button_link = payload.primaryButtonLink
  if (payload.secondaryButtonText !== undefined) mapped.secondary_button_text = payload.secondaryButtonText
  if (payload.secondaryButtonLink !== undefined) mapped.secondary_button_link = payload.secondaryButtonLink
  if (payload.imageUrl !== undefined) mapped.image_url = payload.imageUrl
  if (payload.aboutTitle !== undefined) mapped.about_title = payload.aboutTitle
  if (payload.aboutDescription !== undefined) mapped.about_description = payload.aboutDescription
  if (payload.aboutCardTitle !== undefined) mapped.about_card_title = payload.aboutCardTitle
  if (payload.aboutCardDescription !== undefined) mapped.about_card_description = payload.aboutCardDescription
  if (payload.highlightsTitle !== undefined) mapped.highlights_title = payload.highlightsTitle
  if (payload.highlightsDescription !== undefined) mapped.highlights_description = payload.highlightsDescription
  if (payload.highlights !== undefined) mapped.highlights = JSON.stringify(payload.highlights)
  if (payload.isActive !== undefined) mapped.is_active = payload.isActive ? 1 : 0

  return mapped
}