import { useEffect, useState } from 'react'
import { StatusResponse } from '@project/shared'
import { apiFetch } from '../../../services/api'
import { useDocumentTitle } from '@project/ui'
import { LoadingSpinner } from '@project/ui'
import './ConnectionTest.css'

import {
  APP_CONFIG,
  GENERAL_MESSAGES,
  MANAGER_ROUTES,
  REQUEST_ERRORS,
} from '@project/shared'

export function ConnectionTest() {
  useDocumentTitle(MANAGER_ROUTES.CONNECTION_TEST.TITLE)

  const [message, setMessage] = useState<string>(GENERAL_MESSAGES.CONNECTING_MESSAGE)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [hasError, setHasError] = useState<boolean>(false)

  useEffect(() => {
    async function fetchStatus() {
      try {
        const [data] = await Promise.all([
          apiFetch<StatusResponse>(
            '/testa_conexao_frontend'
          ),
          new Promise((resolve) =>
            setTimeout(resolve, APP_CONFIG.LOADING_DELAY)
          ),
        ])

        setMessage(data.message)
        setHasError(false)
      } catch (error) {
        console.error(error)
        setMessage(REQUEST_ERRORS.CONNECTION_ERROR)
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
          {MANAGER_ROUTES.CONNECTION_TEST.TITLE}
        </h1>

        <section className='connection-test-page__status-wrapper'>
          {
            isLoading ? (
              <LoadingSpinner
                message={GENERAL_MESSAGES.CONNECTING_MESSAGE}
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