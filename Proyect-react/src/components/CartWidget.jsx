import React from 'react'
import { useContext } from 'react'
import { miContexto } from '../CartProvider'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    //Mandar a llamar al hook useContext en otras palabras le extrae el valor actual al contexto
    const valorDelContexto = useContext(miContexto)

    return (
        <div>
            <Link to="/carrito">🛒</Link>
            <span>{valorDelContexto.total}</span>
        </div>
    )
}

export default CartWidget