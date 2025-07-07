import React from 'react'
import './Navbar.css';
import Logo from './Logo';
import Navbarrigt from './Navbarrigt';

const Navbar = () => {
  return (
    <div className='navbar'>
        <Logo/>
        <Navbarrigt/>
    </div>
  )
}

export default Navbar
