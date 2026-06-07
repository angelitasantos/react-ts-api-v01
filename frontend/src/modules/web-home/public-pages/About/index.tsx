import { useAbout } from '../../../../hooks/useAbout';
import { AboutHero } from '../../components/AboutHero';
import { AboutValues } from '../../components/AboutValues';
import { LOADING_CONTENT, NO_CONTENT_AVAILABLE } from '../../../../constants/messages';
import './about.css';

export default function About() {
  const { about, loading, error } = useAbout();

  return (
    <div className='about-page'>
      <main className='about-page__main'>
        {loading && (
          <section className='about-page__status-wrapper'>
            <div className='about-page__status'>{LOADING_CONTENT}</div>
          </section>
        )}

        {!loading && error && (
          <section className='about-page__status-wrapper'>
            <div className='about-page__status about-page__status--error'>
              {error}
            </div>
          </section>
        )}

        {!loading && !error && about && (
          <>
            <AboutHero content={about} />
            <AboutValues
              title={about.valuesTitle}
              values={about.values}
              missionTitle={about.missionTitle}
              missionDescription={about.missionDescription}
            />
          </>
        )}

        {!loading && !error && !about && (
          <section className='about-page__status-wrapper'>
            <div className='about-page__status'>{NO_CONTENT_AVAILABLE}</div>
          </section>
        )}
      </main>
    </div>
  );
}