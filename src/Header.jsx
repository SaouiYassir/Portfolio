import { useEffect, useRef } from 'react';
import './Header.css';
import $ from 'jquery';

function Header() {
  const navRef = useRef(null);

  useEffect(() => {
    const listItems = $(navRef.current).find('a');

    listItems.hover(
      function() {
        $(this).css({
          'color': '#007bff',
          'transition': '0.3s',
          'cursor': 'pointer'
        });
      },
      function() {
        $(this).css('color', 'black');
      }
    );

    return () => {
      listItems.off();
    };
  }, []);

  return (
    <header>
      <div className='right-part'>YASSIR SAOUI</div>
      <div className='list-elements'>
        <ul ref={navRef}>
          <li><a className='header-links' href="#">Home</a></li>
          <li><a className='header-links' href="#Projects">Projects</a></li>
          <li><a className='header-links' href="#Contacts">Contact</a></li>
        </ul>
      </div>
      <div className='left-part'>
        <a href="mailto:yassirsaoui06@gmail.com">Hire me</a>
      </div>
    </header>
  );
}

export default Header;