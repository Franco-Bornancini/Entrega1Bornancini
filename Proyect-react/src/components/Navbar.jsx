import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Header.css'

const Navbar = () => {


  return (
    <div className='header'>
        <h1 className='header_title'>Navbar</h1>
        <nav className='header_nav'>
            <NavLink to="/" className='nav__link'>Home</NavLink>
            <NavLink to="/productos" className='nav__link'>Pokemons</NavLink>
            <NavLink to="/contacto" className='nav__link'>Contacto</NavLink>
        </nav>
    </div>
  )
}

export default Navbar