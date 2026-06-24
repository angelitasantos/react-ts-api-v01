import { useHome } from '../../hooks/useHome'
import { HomeBanner } from '../../components/HomeBanner/HomeBanner'
import { HomeHighlights } from '../../components/HomeHighlights/HomeHighlights'
import { HomeAbout } from '../../components/HomeAbout/HomeAbout'
import { useDocumentTitle } from '@project/ui'
import { GENERAL_MESSAGES } from '@project/shared'
import './home.css'

export default function Home() {
  useDocumentTitle('Home | Site')
  const { home, loading, error } = useHome()

  return (
    <div className='home-page'>
      <main className='home-page__main'>
        {loading && (
          <section className='home-page__status-wrapper'>
            <div className='home-page__status'>{GENERAL_MESSAGES.LOADING_CONTENT}</div>
          </section>
        )}

        {!loading && error && (
          <section className='home-page__status-wrapper'>
            <div className='home-page__status home-page__status--error'>
              {error}
            </div>
          </section>
        )}

        {!loading && !error && home && (
          <>
            <HomeBanner content={home} />
            <HomeHighlights
              title={home.highlightsTitle}
              description={home.highlightsDescription}
              items={home.highlights}
            />
            <HomeAbout
              title={home.aboutTitle}
              description={home.aboutDescription}
              cardTitle={home.aboutCardTitle}
              cardDescription={home.aboutCardDescription}
            />
          </>
        )}

        {!loading && !error && !home && (
          <section className='home-page__status-wrapper'>
            <div className='home-page__status'>{GENERAL_MESSAGES.NO_CONTENT_AVAILABLE}</div>
          </section>
        )}
      </main>
    </div>
  )
}