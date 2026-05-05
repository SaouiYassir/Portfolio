import { useState } from 'react';
import './Header.css';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // This toggles the class on the body so the whole app changes
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header className={isDarkMode ? 'dark-mode-header' : ''}>
      <div className='right-part'>YASSIR SAOUI</div>
      
      <div className='list-elements'>
        {/* No longer need the navRef or jQuery here */}
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