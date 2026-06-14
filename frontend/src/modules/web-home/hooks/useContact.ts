import { useEffect, useState } from 'react'
import { contactService } from '../services/contactService'
import type { ContactContent, ContactFormData } from '../types/contact'
import { CONTACT_FORM_ERROR, CONTACT_FORM_SUCCESS, CONTACT_LOAD_ERROR } from '../../../shared/constants/index'

interface UseContactReturn {
  contact: ContactContent | null
  loading: boolean
  error: string | null
  submitting: boolean
  successMessage: string | null
  submitForm: (data: ContactFormData) => Promise<void>
}

export function useContact(): UseContactReturn {
  const [contact, setContact] = useState<ContactContent | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  useEffect(() => {
    async function fetchContact() {
      try {
        setLoading(true)
        setError(null)

        const data = await contactService.getActiveContact()
        setContact(data)
      } catch {
        setError(CONTACT_LOAD_ERROR)
      } finally {
        setLoading(false)
      }
    }

    fetchContact()
  }, [])

  async function submitForm(data: ContactFormData) {
    try {
      setSubmitting(true)
      setSuccessMessage(null)
      
      await contactService.sendContactForm(data)
      setSuccessMessage(CONTACT_FORM_SUCCESS)
    } catch {
      setError(CONTACT_FORM_ERROR)
    } finally {
      setSubmitting(false)
    }
  }

  return {
    contact,
    loading,
    error,
    submitting,
    successMessage,
    submitForm,
  }
}