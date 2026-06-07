import { Container } from '../../../../components/Container';
import type { AboutContent } from '../../../../types/about';
import './AboutHero.css';

interface AboutHeroProps {
  content: AboutContent;
}

export function AboutHero({ content }: AboutHeroProps) {
  return (
    <section className='about-hero-section'>
      <Container>
        <div className='about-hero'>
          <div className='about-hero__content'>
            <span className='about-hero__eyebrow'>{content.eyebrow}</span>
            <h1 className='about-hero__title'>{content.title}</h1>
            <p className='about-hero__description'>{content.description}</p>
          </div>

          {content.imageUrl && (
            <div className='about-hero__image-wrapper'>
              <img
                className='about-hero__image'
                src={content.imageUrl}
                alt={content.title}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}