import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'

const Productos = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      const data = await response.json()
      setPokemons(data.results)
    }
    fetchData()
  }, [])

  return (
    <div>
        <h2>Lista de Pokemones</h2>
        <ProductList products={pokemons}></ProductList>
    </div>
  )
}

export default Productos