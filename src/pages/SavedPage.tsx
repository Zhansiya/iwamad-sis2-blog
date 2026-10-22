import { useNavigate } from 'react-router'
import { useAuth } from '../context/AuthContext'

function SavedPage() {
  const { signOut } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    signOut()
    navigate('/signin')
  }

  return (
    <main>
      <h1>Saved Posts</h1>

      <p>Your saved posts will appear here.</p>

      <button type="button" onClick={handleSignOut}>
        Sign Out
      </button>
    </main>
  )
}

export default SavedPage