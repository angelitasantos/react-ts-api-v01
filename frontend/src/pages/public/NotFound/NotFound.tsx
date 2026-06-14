import { Link } from 'react-router-dom'
import './NotFound.css'

export function NotFound() {
  return (
    <div className='not-found'>
      <h1 className='not-found__title'>404</h1>

      <p className='not-found__message'>
        Página não encontrada.
      </p>

      <Link
        to='/'
        className='not-found__link'
      >
        Voltar para Home
      </Link>
    </div>
  )
}