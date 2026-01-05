import React, { useContext, useEffect, useState } from 'react'
// referincia a la plataforma firebase
// "app" es la referencia a la plataforma
import { app } from './../firebaseConfig';
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import { miContexto } from '../CartProvider';
  import { ToastContainer, toast } from 'react-toastify';
import '../styles/CarritoPage.css'

const CarritoPage = () => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const elValorDelContexto = useContext(miContexto);

    useEffect(() => {
        console.log("Contenido del carrito:", elValorDelContexto.pokemons);
    }, [elValorDelContexto.pokemons]);

    function handleComprar(event) {
        event.preventDefault();


        if(!nombre.trim() || !telefono.trim()){
            toast.warn('Porfavor rellene todos los campos.', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }

        

        const datosCompra = {
            nombre: nombre,
            telefono: telefono,
            pokemons: elValorDelContexto.pokemons,
            fecha: new Date(),
            timestamp: Date.now()

        }

        // referencia a la base de datos
        const db = getFirestore(app);
        // referencia a la coleccion con la cual voy a interactuar
        const productCollection = collection(db, 'compras');
        // hago la consulta (CRUD/ABM = create, read, update, delete / alta, baja, modificacion)
        const consulta = addDoc(productCollection, datosCompra);
        
        consulta.then( (response) => {
            console.log("Documento creado correctamente", response.id);
        }).catch( (error) => {
            console.log("Error al crear el documento", error);
        });

        // alert("Compra confirmada. Gracias por su compra!");
        toast.success('Compra confirmada. Gracias por su compra!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
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
                    <input 
                        type="text" 
                        id="nombre" 
                        placeholder='nombre' 
                        inputMode='text'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Telefono:</label>
                    <input 
                        type="text" 
                        id="telefono" 
                        placeholder='telefono' 
                        inputMode='tel' 
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                    />
                </div>
                <button onClick={handleComprar}>confirmar compra</button>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </form>
        </div>
        

    </section>
    
  )
}

export default CarritoPage