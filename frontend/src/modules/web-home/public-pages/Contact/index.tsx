import { useContact } from '../../hooks/useContact'
import { ContactHero } from '../../components/ContactHero'
import { ContactForm } from '../../components/ContactForm'
import { useDocumentTitle } from '../../../../shared/hooks/useDocumentTitle'
import './contact.css'

export default function Contact() {
  useDocumentTitle('Contact | Site')

  const { contact, loading, error, submitting, successMessage, submitForm } =
    useContact()

  return (
    <div className='contact-page'>
      <main className='contact-page__main'>
        {loading && (
          <section className='contact-page__status-wrapper'>
            <div className='contact-page__status'>Carregando conteúdo...</div>
          </section>
        )}

        {!loading && error && (
          <section className='contact-page__status-wrapper'>
            <div className='contact-page__status contact-page__status--error'>
              {error}
            </div>
          </section>
        )}

        {!loading && !error && contact && (
          <>
            <ContactHero content={contact} />
            <ContactForm
              content={contact}
              submitting={submitting}
              successMessage={successMessage}
              onSubmit={submitForm}
            />
          </>
        )}
      </main>
    </div>
  )
}