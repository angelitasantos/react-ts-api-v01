import { useState } from 'react';
import { Container } from '../../../../components/Container';
import type { ContactContent, ContactFormData } from '../../../../types/contact';
import './ContactForm.css';

interface ContactFormProps {
  content: ContactContent;
  submitting: boolean;
  successMessage: string | null;
  onSubmit: (data: ContactFormData) => Promise<void>;
}

export function ContactForm({
  content,
  submitting,
  successMessage,
  onSubmit,
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await onSubmit(formData);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  return (
    <section className='contact-form-section'>
      <Container>
        <div className='contact-form-layout'>
          <div className='contact-info-card'>
            <h2 className='contact-info-card__title'>{content.infoTitle}</h2>

            <div className='contact-info-card__item'>
              <span className='contact-info-card__label'>E-mail</span>
              <p className='contact-info-card__text'>{content.email}</p>
            </div>

            <div className='contact-info-card__item'>
              <span className='contact-info-card__label'>Telefone</span>
              <p className='contact-info-card__text'>{content.phone}</p>
            </div>

            <div className='contact-info-card__item'>
              <span className='contact-info-card__label'>Endereço</span>
              <p className='contact-info-card__text'>{content.address}</p>
            </div>
          </div>

          <form className='contact-form-card' onSubmit={handleSubmit}>
            <h2 className='contact-form-card__title'>Envie sua mensagem</h2>

            <div className='contact-form-card__grid'>
              <div className='contact-form-card__field'>
                <label htmlFor='name'>Nome</label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Digite seu nome'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='contact-form-card__field'>
                <label htmlFor='email'>E-mail</label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Digite seu e-mail'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='contact-form-card__field contact-form-card__field--full'>
                <label htmlFor='subject'>Assunto</label>
                <input
                  id='subject'
                  name='subject'
                  type='text'
                  placeholder='Digite o assunto'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='contact-form-card__field contact-form-card__field--full'>
                <label htmlFor='message'>Mensagem</label>
                <textarea
                  id='message'
                  name='message'
                  placeholder='Escreva sua mensagem'
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {successMessage && (
              <div className='contact-form-card__success'>{successMessage}</div>
            )}

            <button
              className='contact-form-card__button'
              type='submit'
              disabled={submitting}
            >
              {submitting ? 'Enviando...' : 'Enviar mensagem'}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}