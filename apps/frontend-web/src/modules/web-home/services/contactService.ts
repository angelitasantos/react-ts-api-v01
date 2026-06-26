import { contactMock, contactFormMock } from '../mocks/contactMock'
import type { ContactContent, ContactFormData, } from '../types/contact'
import type { ApiResponse } from '@project/shared'
import { CONTENT_ERRORS, GENERAL_MESSAGES } from '@project/shared'

const API_URL = import.meta.env.VITE_API_URL

export const contactService = {
  async getActiveContact(): Promise<ContactContent> {
    try {
      const url = `${API_URL}/contact/active`

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(CONTENT_ERRORS.CONTACT_LOAD_ERROR)
      }

      const result: ApiResponse<ContactContent> =
        await response.json()

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
      const url = `${API_URL}/contact-form`

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || CONTENT_ERRORS.CONTACT_FORM_ERROR)
      }

      return {message: result.message || GENERAL_MESSAGES.CONTACT_FORM_SUCCESS,}
    } catch (error) {
      console.warn('API de formulário indisponível. Utilizando mock.', error)

      await new Promise((resolve) =>
        setTimeout(resolve, 500)
      )
      return contactFormMock
    }
  },
}