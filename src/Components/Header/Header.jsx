import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './Header.css'

const NAV_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Services', to: '/services' },
]

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });
    const location = useLocation();

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleTheme = () => setIsDarkMode(prev => !prev);

    const handleLinkClick = () => {
        setIsOpen(false);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const isActive = (path) => location.pathname === path;

    return (
        <header data-aos="fade-down" className={scrolled ? 'header-scrolled' : ''}>
            <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
                <span className="logo-mark">YS</span>
            </Link>

            <nav className="nav-links">
                {NAV_LINKS.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={isActive(link.to) ? 'active' : ''}
                        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            <div className="header-actions">
                <div
                    className="theme-toggle"
                    onClick={toggleTheme}
                    role="button"
                    tabIndex={0}
                    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
                >
                    <i className={isDarkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'}></i>
                </div>

                <Link to="/contact" className="header-cta" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
                    Let's talk
                </Link>

                <button
                    type="button"
                    className={`hamburger ${isOpen ? 'active' : ''}`}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    onClick={toggleMenu}
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </button>
            </div>

            <nav id="mobile-navigation" className={`nav ${isOpen ? 'active' : ''}`}>
                {NAV_LINKS.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={isActive(link.to) ? 'active' : ''}
                        onClick={handleLinkClick}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} className="header-cta header-cta--mobile" onClick={handleLinkClick}>
                    Let's talk
                </Link>
            </nav>
        </header>
    )
}

export default Header