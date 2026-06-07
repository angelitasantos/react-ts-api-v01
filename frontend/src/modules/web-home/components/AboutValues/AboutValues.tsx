import { Container } from '../../../../components/Container';
import type { AboutValueItem } from '../../../../types/about';
import './AboutValues.css';

interface AboutValuesProps {
  title: string;
  values: AboutValueItem[];
  missionTitle: string;
  missionDescription: string;
}

export function AboutValues({
  title,
  values,
  missionTitle,
  missionDescription,
}: AboutValuesProps) {
  return (
    <section className='about-values-section'>
      <Container>
        <div className='about-values__header'>
          <span className='about-values__eyebrow'>Valores</span>
          <h2 className='about-values__title'>{title}</h2>
        </div>

        <div className='about-values__grid'>
          {values.map((value) => (
            <article key={value.id} className='about-value-card'>
              <div className='about-value-card__icon'>{value.icon ?? '✨'}</div>
              <h3 className='about-value-card__title'>{value.title}</h3>
              <p className='about-value-card__description'>{value.description}</p>
            </article>
          ))}
        </div>

        <div className='about-mission'>
          <h3 className='about-mission__title'>{missionTitle}</h3>
          <p className='about-mission__description'>{missionDescription}</p>
        </div>
      </Container>
    </section>
  );
}