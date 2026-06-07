import { Container } from '../../../../components/Container';
import type { ContactContent } from '../../../../types/contact';
import './ContactHero.css';

interface ContactHeroProps {
  content: ContactContent;
}

export function ContactHero({ content }: ContactHeroProps) {
  return (
    <section className='contact-hero-section'>
      <Container>
        <div className='contact-hero'>
          <span className='contact-hero__eyebrow'>{content.eyebrow}</span>
          <h1 className='contact-hero__title'>{content.title}</h1>
          <p className='contact-hero__description'>{content.description}</p>
        </div>
      </Container>
    </section>
  );
}