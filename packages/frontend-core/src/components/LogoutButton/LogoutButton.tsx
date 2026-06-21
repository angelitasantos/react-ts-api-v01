import { useNavigate } from 'react-router-dom'
import './LogoutButton.css'

type LogoutButtonProps = {
  onLogout: () => void
}

export function LogoutButton({ onLogout }: LogoutButtonProps) {
  const navigate = useNavigate()

  function handleLogout() {
    onLogout()
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