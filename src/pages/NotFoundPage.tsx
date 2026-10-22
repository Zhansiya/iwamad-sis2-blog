import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <main>
      <section className="not-found">
        <p className="error-code">ERROR 404</p>

        <h1>Page not found.</h1>

        <p>
          Sorry, the page you are looking for doesn't exist or may have
          been moved.
        </p>

        <Link to="/" className="primary-button">
          Back to Home
        </Link>
      </section>
    </main>
  )
}

export default NotFoundPage