import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/Header.css'
import CartWidget from './CartWidget'
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import { app } from '../firebaseConfig'

const Navbar = () => {

  const [types, setTypes] = useState([])

  const db = getFirestore(app);
  const collectionRef = collection(db, 'pokemons');
  const consulta = getDocs(collectionRef);

  // OBTENEMOS LOS TIPOS DE POKEMONS PARA EL DROPDOWN
  consulta.then( (response) => {
    const pokemonsArray = response.docs.map( (doc) => {
      return {id: doc.id, ...doc.data()}
    });
    for( const typesPoke of pokemonsArray ){
      if( typesPoke.types ){
        typesPoke.types.forEach( (type) => {
          if( !types.includes(type) ){
            setTypes([...types, type])
          }
        })
      }
    }
  }).catch( (error) => {
    console.log("Error al obtener los documentos", error);
  });



  return (
    <div className='header'>
        <h1 className='header_title'>Navbar</h1>
        <nav className='header_nav'>
            <NavLink to="/" className='nav__link'>Home</NavLink>
            <NavLink to="/productos" className='nav__link'>Pokemons</NavLink>
            <NavLink to="/contacto" className='nav__link'>Contacto</NavLink>
            <ul>
                <li className='nav__link dropdown'>Categorías
                    <ul className='dropdown-content'>
                      {types.map( (type) => (
                        <li key={type}><NavLink to={`/category/${type}`}>{type}</NavLink></li>
                      ))}
                    </ul>
                </li>
            </ul>
        </nav>
        <CartWidget></CartWidget>
    </div>
  )
}

export default Navbar