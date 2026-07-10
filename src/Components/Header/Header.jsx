import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './Header.css'

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <header data-aos="fade-down">
            <div className="logo" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>YASSIR SAOUI</div>
            <nav className="nav-links">
                <Link to="/" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>Home</Link>
                <Link to="/about" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>About</Link>
                <Link to="/projects" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>Projects</Link>
                <Link to="/services" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>Services</Link>
                <Link to="/contact" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>Contact</Link>
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
                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
            <nav className={`nav ${isOpen ? 'active' : ''}`}>
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/about" onClick={handleLinkClick}>About</Link>
                <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
                <Link to="/services" onClick={handleLinkClick}>Services</Link>
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                
            </nav>
        </header>
    )
}

export default Header