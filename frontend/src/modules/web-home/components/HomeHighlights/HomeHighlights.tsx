import type { HomeHighlightItem } from '../../../../types/home';
import { Container } from '../../../../components/Container';
import './HomeHighlights.css';

interface HomeHighlightsProps {
  title: string;
  description: string;
  items: HomeHighlightItem[];
}

export function HomeHighlights({ title, description, items }: HomeHighlightsProps) {
  return (
    <section className='home-highlights-section'>
      <Container>
        <div className='home-section-heading'>
          <span className='home-section-heading__eyebrow'>Destaques</span>
          <h2 className='home-section-heading__title'>{title}</h2>
          <p className='home-section-heading__description'>{description}</p>
        </div>

        <div className='home-highlights'>
          {items.map((item) => (
            <article key={item.id} className='home-highlight-card'>
              <div className='home-highlight-card__icon'>{item.icon ?? '✨'}</div>
              <h3 className='home-highlight-card__title'>{item.title}</h3>
              <p className='home-highlight-card__description'>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}