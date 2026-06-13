import axios from 'axios'
import { FormEvent, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import './LoginPage.css'

export function LoginPage() {
  const { signIn } = useAuth()

  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('admin@email.com')
  const [password, setPassword] = useState('123456')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const from = location.state?.from?.pathname || '/manager'

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    setError('')
    setLoading(true)

    try {
      await signIn(email, password)

      navigate(from, { replace: true })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ??
          'E-mail ou senha inválidos.'
        )
      } else {
        setError('Erro ao realizar login.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="login-page">
      <div className="login-card">
        <h1 className="login-card__title">
          Acesso ao Painel
        </h1>

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          {error && (
            <p className="login-form__error">
              {error}
            </p>
          )}
          
          <div className="login-form__group">
            <label htmlFor="email">E-mail</label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
            />
          </div>

          <div className="login-form__group">
            <label htmlFor="password">Senha</label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="login-form__submit"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </section>
  )
}