import React, {useState} from 'react'
import "./Navbar.css";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const {toggleMenu, setToggleMenu} = useState(false);
  return (
    <nav className='navbar'>
        <div className='brand__and__toggler flex'>
          <a href = "index.html" alt = "" className='navbar__brand'>
            <div className='logo'>alfred</div>
          </a>
        </div>
        <div className='navbar__align'>
          <ul className='navbar__nav'>
            <li className='nav__item'>
              <a href='#home' className='nav__link  fw__4 text__light nav__active'>Home</a>
            </li>
            <li className='nav__item'>
              <a href='#home' className='nav__link  fw__4 text__light nav__active'>Pricing</a>
            </li>
            <li className='nav__item'>
              <a href='#home' className='nav__link  fw__4 text__light nav__active'>  Demo</a>
            </li>
            <li className='nav__item'>
              <a href='#home' className='nav__link  fw__4 text__light nav__active'>FAQ</a>
            </li>
            <li className='nav__item'>
              <a href='#home' className='nav__link fw__4 text__light nav__active'>Log In</a>
            </li>
            <li className='nav__item'>
              <a href='#home' className='nav__link  fw__4 text__light nav__active'>Book Calls</a>
            </li>
          </ul>
        </div>
    </nav>

  )
}

export default Navbar
