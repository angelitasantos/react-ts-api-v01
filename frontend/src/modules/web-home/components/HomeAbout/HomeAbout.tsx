import { Container } from '../../../../components/Container';
import './HomeAbout.css';

interface HomeAboutProps {
  title: string;
  description: string;
  cardTitle: string;
  cardDescription: string;
}

export function HomeAbout({ title, description, cardTitle, cardDescription }: HomeAboutProps) {
  return (
    <section className='home-about-section'>
      <Container>
        <div className='home-about'>
          <div className='home-about__content'>
            <span className='home-about__eyebrow'>Sobre a página</span>
            <h2 className='home-about__title'>{title}</h2>
            <p className='home-about__description'>{description}</p>
          </div>

          <div className='home-about__card'>
            <h3 className='home-about__card-title'>{cardTitle}</h3>
            <p className='home-about__card-text'>{cardDescription}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}