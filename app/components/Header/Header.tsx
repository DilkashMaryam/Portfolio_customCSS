import React from 'react'
import Headerstyle  from './Header.module.css'

const Header = () => {
  return (
    <div className={Headerstyle.header}>
        <a href="#" className={Headerstyle.logo}>Dilkash.</a>

<nav className={Headerstyle.navbar}>
          <a href="#" className={Headerstyle.active}>Home</a>
          <a href="/About">About</a>
          <a href="/Services">Services</a>
          <a href="/Portfolio">Portfolio</a>
        </nav>

    </div>
  )
}

export default Header
