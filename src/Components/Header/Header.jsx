import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/services' },
]

function Header() {
  const location = useLocation()

  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      return savedTheme === 'dark'
    }

    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
  })

  // Apply and save the selected theme.
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  // Change the header appearance after scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setIsOpen(false)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.pathname])

  // Prevent the page behind the mobile menu from scrolling.
  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isOpen])

  // Close the menu with Escape.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Close the mobile menu when returning to desktop width.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen((previousValue) => !previousValue)
  }

  const toggleTheme = () => {
    setIsDarkMode((previousValue) => !previousValue)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }

    return location.pathname === path || location.pathname.startsWith(`${path}/`)
  }

  return (
    <header
      className={`site-header ${scrolled ? 'header-scrolled' : ''}`}
      data-aos="fade-down"
    >
      <Link
        to="/"
        className="logo"
        aria-label="Yassir Saoui — Home"
        onClick={closeMenu}
      >
        <span className="logo-mark" aria-hidden="true">
          YS
        </span>
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        {NAV_LINKS.map((link) => {
          const active = isActive(link.to)

          return (
            <Link
              key={link.to}
              to={link.to}
              className={active ? 'active' : ''}
              aria-current={active ? 'page' : undefined}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>

      <div className="header-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={
            isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
          }
          aria-pressed={isDarkMode}
        >
          <i
            className={isDarkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'}
            aria-hidden="true"
          />
        </button>

        <Link to="/contact" className="header-cta">
          Let&apos;s talk
        </Link>

        <button
          type="button"
          className={`hamburger ${isOpen ? 'active' : ''}`}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={
            isOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          onClick={toggleMenu}
        >
          <span className="bar" aria-hidden="true" />
          <span className="bar" aria-hidden="true" />
          <span className="bar" aria-hidden="true" />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${isOpen ? 'active' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        {NAV_LINKS.map((link) => {
          const active = isActive(link.to)

          return (
            <Link
              key={link.to}
              to={link.to}
              className={active ? 'active' : ''}
              aria-current={active ? 'page' : undefined}
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
            >
              {link.label}
            </Link>
          )
        })}

        <Link
          to="/contact"
          className="header-cta header-cta--mobile"
          onClick={closeMenu}
          tabIndex={isOpen ? 0 : -1}
        >
          Let&apos;s talk
        </Link>
      </nav>
    </header>
  )
}

export default Header