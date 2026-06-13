import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import './LogoutButton.css'

export function LogoutButton() {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    signOut()
    navigate('/login', { replace: true })
  }

  return (
    <button
      type="button"
      className="logout-button"
      onClick={handleLogout}
    >
      Sair
    </button>
  )
}