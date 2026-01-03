import { Link } from 'react-router-dom'
import '../styles/ProductList.css'
import { miContexto } from '../CartProvider'
import { useContext } from 'react'

const ProductList = ({ pokemons }) => {
    console.log(pokemons)
    const elValorDelContexto = useContext(miContexto)

    function handleAddToCart(pokemon) {
        elValorDelContexto.setTotal(elValorDelContexto.total + 1);
        elValorDelContexto.setPokemons([...elValorDelContexto.pokemons, pokemon]);
    }

    return (
        <div className="product-list">
        {pokemons.map(pokemon => (
            <div key={pokemon.nombre} className="product-item">
                <img src={pokemon.imagen} alt={pokemon.nombre} />
                <h3>{pokemon.nombre}</h3>
                {pokemon.types && <p>Tipo: {pokemon.types.join(', ')}</p>}
                <button><Link to={`/productos/${pokemon.nombre}`}>Ver pokemon</Link></button>
                <button onClick={() => handleAddToCart(pokemon)}>Agregar al carrito</button>
            </div>
        ))}
        </div>
    )
}

export default ProductList