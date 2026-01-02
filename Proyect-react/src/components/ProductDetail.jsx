import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { miContexto } from '../CartProvider'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from './../firebaseConfig';
import '../styles/ProductDetail.css'

const ProductDetail = () => {

    const {name} = useParams();
    const [pokemon, setPokemon] = useState({});
    const elValorDelContexto = useContext(miContexto)

    useEffect(() => {  
        const fetchPokemon = async () => {
            const db = getFirestore(app);
            const pokemonsCollection = collection(db, 'pokemons');
            const consulta = await getDocs(pokemonsCollection);
            // extraemos de la consulta los datos de los pokemons
            const pokemonData = consulta.docs.map( (doc) => ({id: doc.id, ...doc.data()}));
            // buscamos el pokemon que coincide con el nombre pasado por parametro
            const pokemonFound = pokemonData.find(p => p.nombre === name);
            setPokemon(pokemonFound);
        };
        fetchPokemon();
    }, [name]);


    function handleAddToCart(pokemon) {
        console.log("Pokemon agregado al carrito", pokemon);
        elValorDelContexto.setTotal(elValorDelContexto.total + 1);
        elValorDelContexto.setPokemons([...elValorDelContexto.pokemons, pokemon]);
    }

    console.log(pokemon)

    return (
        <div className="product-detail">
            <h3>Carta pokemon</h3>
            <img src={pokemon.imagen} alt={pokemon.nombre} />
            <h2 className='product-Name'>{pokemon.nombre}</h2 >
            <p>Habilidades: {pokemon.habilidades?.map(ability => ability).join(', ')}</p>
            <button onClick={() => handleAddToCart(pokemon)}>Agregar al carrito</button>
        </div>
    )
}
export default ProductDetail
