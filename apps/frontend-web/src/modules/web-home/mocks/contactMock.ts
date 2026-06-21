import type { ContactContent } from '../types/contact'
import { CONTACT_FORM_SUCCESS } from '@project/shared'

export const contactMock: ContactContent = {
  id: 1,
  eyebrow: 'Fale conosco',
  title: 'Vamos conversar sobre seu projeto',
  description:
    'Use o formulário abaixo para enviar sua mensagem. No momento ele funciona localmente no frontend, mas já está preparado para integração com API futuramente.',
  infoTitle: 'Informações de contato',
  email: 'contato@webproject.com',
  phone: '(11) 99999-9999',
  address: 'São Paulo - SP, Brasil',
  isActive: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

export const contactFormMock = {
  message: CONTACT_FORM_SUCCESS,
}