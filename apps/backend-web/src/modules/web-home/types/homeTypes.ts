export interface HomeHighlightItem {
  id: number
  title: string
  description: string
  icon?: string
}

export interface HomeEntity {
  id: number
  title: string
  subtitle: string
  description: string
  primary_button_text: string
  primary_button_link: string
  secondary_button_text: string | null
  secondary_button_link: string | null
  image_url: string | null
  about_title: string
  about_description: string
  about_card_title: string
  about_card_description: string
  highlights_title: string
  highlights_description: string
  highlights: string
  is_active: number
  created_at: string
  updated_at: string
}

export interface CreateHomeDTO {
  title: string
  subtitle: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  imageUrl?: string
  aboutTitle: string
  aboutDescription: string
  aboutCardTitle: string
  aboutCardDescription: string
  highlightsTitle: string
  highlightsDescription: string
  highlights: HomeHighlightItem[]
  isActive: boolean
}

export interface UpdateHomeDTO {
  title?: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  imageUrl?: string
  aboutTitle?: string
  aboutDescription?: string
  aboutCardTitle?: string
  aboutCardDescription?: string
  highlightsTitle?: string
  highlightsDescription?: string
  highlights?: HomeHighlightItem[]
  isActive?: boolean
}