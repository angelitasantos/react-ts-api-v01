import type { HomeContent } from '../../../../types/home';
import { Container } from '../../../../components/Container';
import './HomeBanner.css';

interface HomeBannerProps {
  content: HomeContent;
}

export function HomeBanner({ content }: HomeBannerProps) {
  return (
    <section className='home-banner-section'>
      <Container>
        <div className='home-banner'>
          <div className='home-banner__content'>
            <span className='home-banner__subtitle'>{content.subtitle}</span>
            <h1 className='home-banner__title'>{content.title}</h1>
            <p className='home-banner__description'>{content.description}</p>

            <div className='home-banner__actions'>
              <a className='home-banner__button home-banner__button--primary' href={content.primaryButtonLink}>
                {content.primaryButtonText}
              </a>

              {content.secondaryButtonText && content.secondaryButtonLink && (
                <a
                  className='home-banner__button home-banner__button--secondary'
                  href={content.secondaryButtonLink}
                >
                  {content.secondaryButtonText}
                </a>
              )}
            </div>
          </div>

          {content.imageUrl && (
            <div className='home-banner__image-wrapper'>
              <img
                className='home-banner__image'
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