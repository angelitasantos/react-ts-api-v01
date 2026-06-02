import { Link } from 'react-router-dom';
import { useDocumentTitle } from './hooks/useDocumentTitle';
import { HOME_PAGE_TITLE } from './constants/index';

function App() {
  useDocumentTitle(HOME_PAGE_TITLE);
  return (
    <div>
      <h1>{HOME_PAGE_TITLE}</h1>

      <Link to='/connection-test'>
        Testar conexão com Backend
      </Link>
    </div>
  );
}

export default App;