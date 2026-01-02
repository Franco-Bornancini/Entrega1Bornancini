import React, { useContext, useEffect } from 'react'
import { app } from './../firebaseConfig';
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import { miContexto } from '../CartProvider';
import '../styles/CarritoPage.css'

const CarritoPage = () => {
    const elValorDelContexto = useContext(miContexto);

    useEffect(() => {
        console.log("Contenido del carrito:", elValorDelContexto.pokemons);
    }, [elValorDelContexto.pokemons]);

    function handleComprar(event) {
        event.preventDefault();
        alert("Compra confirmada. Gracias por su compra!");
        // necesito una referincia a la plataforma firebase
        // "app" es la referencia a la plataforma

        // necesito una referencia a la base de datos
        const db = getFirestore(app);
        // necesito una referencia a la coleccion con la cual voy a interactuar
        const productCollection = collection(db, 'orders');
        // hago la consulta (CRUD/ABM = create, read, update, delete / alta, baja, modificacion)
        const consulta = addDoc(productCollection, {
            nombre: "producto prueba",
            precio: 1000
        });
        
        consulta.then( (response) => {
            console.log("Documento creado correctamente", response.id);
        }).catch( (error) => {
            console.log("Error al crear el documento", error);
        });
    }

  return (
    <section >
        <h2>Mi carrito de compras</h2>
        <div className='carrito-page'>
            {elValorDelContexto.pokemons.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <div className='carrito-list'>
                    {elValorDelContexto.pokemons.map((pokemon, index) => (
                        <div key={index} className='card-pokemon'>
                            <img src={pokemon.imagen} alt={pokemon.nombre} />
                            <p>{pokemon.nombre}</p>
                        </div>
                    ))}
                </div>
            )}

            <form action="" className='form-carrito'>
                <div>
                    <label htmlFor="">Nombre:</label>
                    <input type="text" id="nombre" placeholder='nombre' inputMode='text' />
                </div>
                <div>
                    <label htmlFor="">Telefono:</label>
                    <input type="text" id="telefono" placeholder='telefono' inputMode='tel' />
                </div>
                <button onClick={handleComprar}>confirmar compra</button>
            </form>
        </div>
        

    </section>
    
  )
}

export default CarritoPage