import { Link } from 'react-router-dom'
import './BaseStatusPage.css'

interface BaseStatusPageProps {
  code?: string
  title: string
  description: string

  buttonLabel?: string
  buttonTo?: string

  children?: React.ReactNode
}

export function BaseStatusPage({
  code,
  title,
  description,
  buttonLabel,
  buttonTo,
  children,
}: BaseStatusPageProps) {
  return (
    <main className='status-page'>
      <section className='status-page__card'>

        {code && (
          <span className='status-page__code'>
            {code}
          </span>
        )}

        <h1 className='status-page__title'>{title}</h1>

        <p className='status-page__description'>{description}</p>

        {children}

        {buttonLabel && buttonTo && (
          <Link
            to={buttonTo}
            className='status-page__button'
          >
            {buttonLabel}
          </Link>
        )}

      </section>
    </main>
  )
}