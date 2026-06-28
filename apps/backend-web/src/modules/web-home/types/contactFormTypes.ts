export interface ContactFormEntity {
  id: number
  name: string
  email: string
  subject: string
  message: string
  created_at: string
}

export interface CreateContactFormDTO {
  name: string
  email: string
  subject: string
  message: string
}