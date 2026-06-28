import { 
  ContactFormEntity, 
  CreateContactFormDTO
} from '../types/contactFormTypes'

export function mapContactFormEntity(entity: ContactFormEntity) {
  return {
    id: entity.id,
    name: entity.name,
    email: entity.email,
    subject: entity.subject,
    message: entity.message,
    createdAt: entity.created_at,
  }
}

export function mapCreateContactFormDTOToDb(payload: CreateContactFormDTO) {
  return {
    name: payload.name,
    email: payload.email,
    subject: payload.subject,
    message: payload.message,
  }
}