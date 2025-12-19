import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/ProductDetail.css'

const ProductDetail = () => {

    const {name} = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {  
        const fetchPokemon = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            const data = await response.json();
            setPokemon(data);
        } 
        fetchPokemon();
    }, [name]);


    return (
        <div className="product-detail">
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
            <h2 className='product-Name'>{pokemon.name}</h2 >
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>abilities: {pokemon.abilities?.map(ability => ability.ability.name).join(', ')}</p>
        </div>
    )
}
export default ProductDetail
