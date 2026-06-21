import { useEffect, useState } from 'react'
import { StatusResponse } from '@project/shared'
import { apiFetch } from '../../../services/api'
import { useDocumentTitle } from '@project/ui'
import { LoadingSpinner } from '@project/ui'
import './ConnectionTest.css'

import {
  CONNECTING_MESSAGE,
  CONNECTION_ERROR_MESSAGE,
  CONNECTION_PAGE_TITLE,
  LOADING_DELAY,
} from '@project/shared'

export function ConnectionTest() {
  useDocumentTitle(CONNECTION_PAGE_TITLE)

  const [message, setMessage] = useState<string>(CONNECTING_MESSAGE)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    async function fetchStatus() {
      try {
        const [data] = await Promise.all([
          apiFetch<StatusResponse>(
            '/api/testa_conexao_frontend'
          ),
          new Promise((resolve) =>
            setTimeout(resolve, LOADING_DELAY)
          ),
        ])

        setMessage(data.message)
        setHasError(false)
      } catch (error) {
        console.error(error)
        setMessage(CONNECTION_ERROR_MESSAGE)
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStatus()
  }, [])

  const statusClassName = isLoading
    ? 'connection-test-page__status--loading'
    : hasError
      ? 'connection-test-page__status--error'
      : 'connection-test-page__status'

  return (
    <div className='connection-test-page'>
      <main className='connection-test-page__main'>
        <h1 className='connection-test-page__title'>
          {CONNECTION_PAGE_TITLE}
        </h1>

        <section className='connection-test-page__status-wrapper'>
          {
            isLoading ? (
              <LoadingSpinner
                message={CONNECTING_MESSAGE}
              />
            ) : (
              <div className={statusClassName}>
                {message}
              </div>
            )
          }
        </section>
      </main>
    </div>
  )
}