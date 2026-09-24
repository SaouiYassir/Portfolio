import { Link } from 'react-router-dom'
import SEO from '../../Components/SEO/SEO.jsx'
import './NotFound.css'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found"
        description="The requested page could not be found."
        noIndex
      />

      <main className="not-found-page">
        <div className="not-found-content">
          <span className="not-found-code">404</span>

          <h1>Page not found</h1>

          <p>
            The page you&apos;re looking for doesn&apos;t exist, or may have
            moved.
          </p>

          <Link to="/" className="not-found-button">
            Back to home
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </main>
    </>
  )
}