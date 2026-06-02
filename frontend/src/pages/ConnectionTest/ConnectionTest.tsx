import { useEffect, useState } from 'react';
import { StatusResponse } from '../../types/api';
import { apiFetch } from '../../services/api';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

import {
  CONNECTING_MESSAGE,
  CONNECTION_ERROR_MESSAGE,
  CONNECTION_PAGE_TITLE,
} from '../../constants/index';

export default function ConnectionTest() {
  useDocumentTitle(CONNECTION_PAGE_TITLE);
  const [message, setMessage] = useState(
    CONNECTING_MESSAGE
  );

  useEffect(() => {
    document.title = CONNECTION_PAGE_TITLE;
    async function fetchStatus() {
      try {
        const data =
          await apiFetch<StatusResponse>(
            '/api/testa_conexao_frontend'
          );

        setMessage(data.message);
      } catch (error) {
        console.error(error);

        setMessage(
          CONNECTION_ERROR_MESSAGE
        );
      }
    }

    fetchStatus();
  }, []);

  return (
    <div>
      <h1>{CONNECTION_PAGE_TITLE}</h1>

      <p>{message}</p>
    </div>
  );
}