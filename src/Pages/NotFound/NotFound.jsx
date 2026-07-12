import { Link, useLocation } from 'react-router-dom'
import SEO from '../../Components/SEO/SEO.jsx'
import './NotFound.css'

export default function NotFound() {
  const location = useLocation()

  return (
    <>
      <SEO
        title="Page not found"
        description="The requested page could not be found."
        path={location.pathname}
        noIndex
      />

      <main className="not-found-page">
        <span className="not-found-code">404</span>

        <h1>Page not found</h1>

        <p>
          The page you&apos;re looking for doesn&apos;t exist, or may have
          moved.
        </p>

        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </main>
    </>
  )
}