import { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTheme = () => setIsDarkMode(prev => !prev);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <header className={isDarkMode ? 'dark-mode-header' : ''}>
        
        <div className='right-part' onClick={handleRefresh}>YASSIR SAOUI</div>

        
        <div className='list-elements'>
          <ul>
            <li><a className='header-links' href="#">Home</a></li>
            <li><a className='header-links' href="#About">About Me</a></li>
            <li><a className='header-links' href="#Projects">Projects</a></li>
            <li><a className='header-links' href="#Contacts">Contact</a></li>
          </ul>
        </div>

        
        <div className='left-part'>
          <i onClick={toggleTheme} style={{ cursor: 'pointer' }} className={isDarkMode ? "bi bi-sun-fill" : "bi bi-moon-fill"}></i>
        </div>

        
        <div className='mobile-controls'>
          <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
            <i className={isDarkMode ? "bi bi-sun-fill" : "bi bi-moon-fill"}></i>
          </div>

          
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      
      <nav className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <ul>
          <li><a className='header-links' href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a className='header-links' href="#About" onClick={() => setMenuOpen(false)}>About Me</a></li>
          <li><a className='header-links' href="#Projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a className='header-links' href="#Contacts" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      
      {menuOpen && (
        <div className='menu-backdrop' onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}

export default Header;
