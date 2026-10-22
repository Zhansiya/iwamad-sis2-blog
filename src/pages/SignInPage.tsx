import { Navigate } from 'react-router'
import { useAuth } from '../context/AuthContext'

function SignInPage() {
  const { isSignedIn, signIn } = useAuth()

  if (isSignedIn) {
    return <Navigate to="/saved" replace />
  }

  return (
    <main>
      <h1>Sign In</h1>

      <p>Sign in to access your saved posts.</p>

      <button type="button" onClick={signIn}>
        Sign In
      </button>
    </main>
  )
}

export default SignInPage