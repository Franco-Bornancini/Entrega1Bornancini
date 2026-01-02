import { createContext, useState } from "react";

export const miContexto = createContext();



function CartProvider(props) {
    const Provider = miContexto.Provider;
    const [total, setTotal] = useState(0);
    const [pokemons, setPokemons] = useState([]);

    const valorDelContexto = {
        pokemons: pokemons,
        setPokemons: setPokemons,
        total: total,
        setTotal: setTotal,
    }
    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}

export default CartProvider;