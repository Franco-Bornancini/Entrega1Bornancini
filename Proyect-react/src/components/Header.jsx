import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {


  return (
    <div className='header'>
        <h1 className='header_title'>Header</h1>
        <nav className='header_nav'>
            <NavLink to="/" className='nav__link'>Home</NavLink>
            <NavLink to="/productos" className='nav__link'>Productos</NavLink>
            <NavLink to="/contacto" className='nav__link'>Contacto</NavLink>
        </nav>
    </div>
  )
}

export default Header