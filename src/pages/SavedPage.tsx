import { Link, useNavigate } from 'react-router'
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
      <section className="simple-page">
        <p className="eyebrow">YOUR COLLECTION</p>

        <h1>Saved Posts</h1>

        <p className="simple-page-text">
          Your saved posts will appear here. Explore the blog to discover
          more articles.
        </p>

        <div className="saved-empty">
          <span className="saved-icon">♡</span>

          <h2>No saved posts yet</h2>

          <p>
            You haven't saved any posts yet. Explore the blog and find
            something interesting to read.
          </p>

          <Link to="/posts" className="primary-button">
            Explore posts
          </Link>
        </div>

        <button
          type="button"
          className="sign-out-button"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </section>
    </main>
  )
}

export default SavedPage