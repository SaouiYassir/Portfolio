// NotFound.jsx
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found"
        description="The requested page could not be found."
        path="/404"
        noIndex
      />
      <main>
        <section className="not-found">
          <p className="not-found-code">404</p>
          <h1>Page not found</h1>
          <p className="not-found-text">
            The page you're looking for doesn't exist, or may have moved.
          </p>
          <Link to="/" className="not-found-link">
            <i className="bi bi-arrow-left"></i> Back to home
          </Link>
        </section>
      </main>
    </>
  )
}