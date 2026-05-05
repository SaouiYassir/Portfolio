import { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  // 1. Initialize state by checking localStorage first
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark'; // Returns true if 'dark', false otherwise
  });

  // 2. Sync the body class and localStorage whenever isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <header className={isDarkMode ? 'dark-mode-header' : ''}>
      <div className='right-part'>YASSIR SAOUI</div>
      <div className='list-elements'>
        <ul>
          <li><a className='header-links' href="#">Home</a></li>
          <li><a className='header-links' href="#Projects">Projects</a></li>
          <li><a className='header-links' href="#Contacts">Contact</a></li>
        </ul>
      </div>
      <div className='left-part' onClick={toggleTheme} style={{ cursor: 'pointer' }}>
        <i className={isDarkMode ? "bi bi-sun-fill" : "bi bi-moon-fill"}></i>
      </div>
    </header>
  );
}

export default Header;