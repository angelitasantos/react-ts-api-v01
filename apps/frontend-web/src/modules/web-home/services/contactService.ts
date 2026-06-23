import { contactMock, contactFormMock } from '../mocks/contactMock'
import type { ContactContent, ContactFormData, } from '../types/contact'
import type { ApiResponse } from '@project/shared'
import {
  CONTACT_FORM_ERROR,
  CONTACT_FORM_SUCCESS,
  CONTACT_LOAD_ERROR,
} from '@project/shared'

const API_URL = import.meta.env.VITE_API_URL

export const contactService = {
  async getActiveContact(): Promise<ContactContent> {
    try {
      const url = `${API_URL}/api/contact/active`
      console.log('Buscando contato em:', url)

      const response = await fetch(url)
      console.log('Status getActiveContact:', response.status)

      if (!response.ok) {
        throw new Error(CONTACT_LOAD_ERROR)
      }

      const result: ApiResponse<ContactContent> =
        await response.json()
      console.log('Conteúdo de contato:', result)

      return result.data
    } catch (error) {
      console.warn('API de contato indisponível. Utilizando mock.', error)
      return contactMock
    }
  },

  async sendContactForm(
    data: ContactFormData
  ): Promise<{ message: string }> {
    try {
      const url = `${API_URL}/api/contact-form`
      console.log('Enviando formulário para:', url, data)

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      console.log('Resposta sendContactForm:', result)

      if (!response.ok) {
        throw new Error(result.message || CONTACT_FORM_ERROR)
      }

      return {message: result.message || CONTACT_FORM_SUCCESS,}
    } catch (error) {
      console.warn('API de formulário indisponível. Utilizando mock.', error)

      await new Promise((resolve) =>
        setTimeout(resolve, 500)
      )
      return contactFormMock
    }
  },
}