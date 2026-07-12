import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
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

  const menuButtonRef = useRef(null)
  const mobileNavigationRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Prevent errors if the website is pre-rendered later.
    if (typeof window === 'undefined') {
      return false
    }

    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      return savedTheme === 'dark'
    }

    return (
      window.matchMedia?.('(prefers-color-scheme: dark)').matches ??
      false
    )
  })

  /**
   * Close the mobile menu safely.
   *
   * When a link inside the menu has keyboard focus, move that focus
   * back to the hamburger before making the navigation inert.
   */
  const closeMenu = useCallback(() => {
    const activeElement = document.activeElement
    const navigation = mobileNavigationRef.current

    if (
      navigation &&
      activeElement &&
      navigation.contains(activeElement)
    ) {
      menuButtonRef.current?.focus()
    }

    setIsOpen(false)
  }, [])

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu()
      return
    }

    setIsOpen(true)
  }

  const toggleTheme = () => {
    setIsDarkMode((previousValue) => !previousValue)
  }

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    )
  }

  // Apply and save the selected theme.
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode)
    localStorage.setItem(
      'theme',
      isDarkMode ? 'dark' : 'light',
    )
  }, [isDarkMode])

  // Change the header appearance after scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close the mobile navigation whenever the route changes.
  useEffect(() => {
    closeMenu()

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [location.pathname, closeMenu])

  // Prevent the page behind the mobile menu from scrolling.
  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isOpen])

  // Close the menu when Escape is pressed.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        closeMenu()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, closeMenu])

  // Close the mobile menu when returning to desktop width.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        closeMenu()
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen, closeMenu])

  return (
    <header
      className={`site-header ${
        scrolled ? 'header-scrolled' : ''
      }`}
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

      <nav
        className="nav-links"
        aria-label="Main navigation"
      >
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
            isDarkMode
              ? 'Switch to light mode'
              : 'Switch to dark mode'
          }
          aria-pressed={isDarkMode}
        >
          <i
            className={
              isDarkMode
                ? 'bi bi-sun-fill'
                : 'bi bi-moon-fill'
            }
            aria-hidden="true"
          />
        </button>

        <Link
          to="/contact"
          className="header-cta"
          onClick={closeMenu}
        >
          Let&apos;s talk
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className={`hamburger ${
            isOpen ? 'active' : ''
          }`}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={
            isOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          onClick={toggleMenu}
        >
          <span className="bar" aria-hidden="true" />
          <span className="bar" aria-hidden="true" />
          <span className="bar" aria-hidden="true" />
        </button>
      </div>

      <nav
        ref={mobileNavigationRef}
        id="mobile-navigation"
        className={`mobile-nav ${
          isOpen ? 'active' : ''
        }`}
        aria-label="Mobile navigation"
        inert={!isOpen}
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
              tabIndex={isOpen ? undefined : -1}
            >
              {link.label}
            </Link>
          )
        })}

        <Link
          to="/contact"
          className="header-cta header-cta--mobile"
          onClick={closeMenu}
          tabIndex={isOpen ? undefined : -1}
        >
          Let&apos;s talk
        </Link>
      </nav>
    </header>
  )
}

export default Header