export interface ContactEntity {
  id: number
  eyebrow: string
  title: string
  description: string
  info_title: string
  email: string
  phone: string
  address: string
  is_active: number
  created_at: string
  updated_at: string
}

export interface CreateContactDTO {
  eyebrow: string
  title: string
  description: string
  infoTitle: string
  email: string
  phone: string
  address: string
  isActive: boolean
}

export interface UpdateContactDTO {
  eyebrow?: string
  title?: string
  description?: string
  infoTitle?: string
  email?: string
  phone?: string
  address?: string
  isActive?: boolean
}