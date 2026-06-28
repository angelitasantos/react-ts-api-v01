export interface AboutValueItem {
  id: number
  title: string
  description: string
  icon?: string
}

export interface AboutEntity {
  id: number
  eyebrow: string
  title: string
  description: string
  image_url: string | null
  values_title: string
  values_json: string
  mission_title: string
  mission_description: string
  is_active: number
  created_at: string
  updated_at: string
}

export interface CreateAboutDTO {
  eyebrow: string
  title: string
  description: string
  imageUrl?: string
  valuesTitle: string
  values: AboutValueItem[]
  missionTitle: string
  missionDescription: string
  isActive: boolean
}

export interface UpdateAboutDTO {
  eyebrow?: string
  title?: string
  description?: string
  imageUrl?: string
  valuesTitle?: string
  values?: AboutValueItem[]
  missionTitle?: string
  missionDescription?: string
  isActive?: boolean
}