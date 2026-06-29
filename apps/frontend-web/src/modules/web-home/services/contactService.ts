import type { ApiResponse } from '@project/shared'
import type { ContactContent, ContactFormData, } from '../types/contact'
import { contactMock, contactFormMock } from '../mocks/contactMock'
import { apiFetch, apiPost } from '../../../services/api'
import { GENERAL_MESSAGES } from '@project/shared'

export const contactService = {
  async getActiveContact(): Promise<ContactContent> {
    try {
      const response = await apiFetch<ApiResponse<ContactContent>>('/contact/active')
      return response.data
    } catch (error) {
      console.log('API de contact indisponível. Utilizando mock.', error)
      return contactMock
    }
  },

  async sendContactForm(
    data: ContactFormData
  ): Promise<{ message: string }> {
    try {
      const response =
        await apiPost<ApiResponse<null>, ContactFormData>(
          '/contact-form',
          data,
        )

      return {message: response.message || GENERAL_MESSAGES.CONTACT_FORM_SUCCESS,}
    } catch (error) {
      console.log('API de formulário indisponível. Utilizando mock.', error)

      await new Promise((resolve) =>
        setTimeout(resolve, 500)
      )
      return contactFormMock
    }
  },
}