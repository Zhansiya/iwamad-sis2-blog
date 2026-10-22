import { Navigate } from 'react-router'
import { useAuth } from '../context/AuthContext'

function SignInPage() {
  const { isSignedIn, signIn } = useAuth()

  if (isSignedIn) {
    return <Navigate to="/saved" replace />
  }

  return (
    <main>
      <section className="auth-page">
        <div className="auth-card">
          <p className="eyebrow">MEMBERS AREA</p>

          <h1>Welcome Back</h1>

          <p className="auth-description">
            Sign in to access your saved posts and continue reading.
          </p>

          <button
            type="button"
            className="auth-button"
            onClick={signIn}
          >
            Sign In
          </button>

          <p className="auth-note">
            This is a simulated sign-in for the SIS 2 project.
          </p>
        </div>
      </section>
    </main>
  )
}

export default SignInPage