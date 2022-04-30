import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }

  window.addEventListener('scroll',changeBackground);

  const showblogs = ()=>{
    window.location.assign('https://ashutosh-kumar.medium.com/');
    closeMobileMenu()
  }

  return(
  <>
      <nav className={navbar | click ? "navbar active" : "navbar"}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Portfolio
            <i class="mgl fas fa-laptop-code"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <HashLink
                to='/#projects'
                className='nav-links'
              >
                Projects
              </HashLink>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={showblogs}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
