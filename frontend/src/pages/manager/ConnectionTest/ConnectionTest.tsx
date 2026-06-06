import { useEffect, useState } from 'react';
import { StatusResponse } from '../../../types/api';
import { apiFetch } from '../../../services/api';
import { useDocumentTitle } from '../../../hooks/useDocumentTitle';
import { LoadingSpinner } from '../../../components/LoadingSpinner';
import './ConnectionTest.css';

import {
  CONNECTING_MESSAGE,
  CONNECTION_ERROR_MESSAGE,
  CONNECTION_PAGE_TITLE,
  LOADING_DELAY,
} from '../../../constants';

export function ConnectionTest() {
  useDocumentTitle(CONNECTION_PAGE_TITLE);

  const [message, setMessage] = useState(
    CONNECTING_MESSAGE
  );

  const [isLoading, setIsLoading] =
    useState(true);

  const [hasError, setHasError] =
    useState(false);

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
        ]);

        setMessage(data.message);
        setHasError(false);
      } catch (error) {
        console.error(error);

        setMessage(
          CONNECTION_ERROR_MESSAGE
        );

        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStatus();
  }, []);

  const statusClassName = isLoading
    ? 'connection-test-page__status--loading'
    : hasError
      ? 'connection-test-page__status--error'
      : 'connection-test-page__status';

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
  );
}