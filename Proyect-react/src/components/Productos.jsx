import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import { app } from './../firebaseConfig';
import {getFirestore, collection, getDocs, addDoc} from 'firebase/firestore';

const Productos = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {

    const db = getFirestore(app);
    const pokemonsCollection = collection(db, 'pokemons');

    const consulta = getDocs(pokemonsCollection);

    consulta.then( (response) => {
      const pokemonsArray = response.docs.map( (doc) => {
        return {id: doc.id, ...doc.data()}
      });
      setPokemons(pokemonsArray);
    }).catch( (error) => {
      console.log("Error al obtener los documentos", error);
    });
  }, [])


  // CREE ESTA FUNCION PARA CARGAR LOS POKEMONS EN FIREBASE, PORQUE NO QUERIA AGREGARLOS MANUALMENTE, ME AYUDE CON LA IA
  // PORQUE NO LOGRABA OBTENER TODOS LOS DATOS DE LOS POKEMONS (IMAGENES Y HABILIDADES) Y NO SABIA COO GUARDAR LAS HABILIADES EN UN ARRAY
  function handleAddPokemons() {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        const data = await response.json()

        const addPokemonsCollection = collection(getFirestore(app), 'pokemons');

        for (const pokemon of data.results) {
          try {
            const detailRes = await fetch(pokemon.url)
            const detail = await detailRes.json()
            console.log(detail)

            const habilidades = (detail.abilities || [])
              .slice(0, 3)
              .map(item => item.ability?.name || null)

            const types = (detail.types || [])
              .map(item => item.type?.name || null)
            
            
            const imagen = detail.sprites?.front_default || null

            await addDoc(addPokemonsCollection, {
              nombre: pokemon.name,
              habilidades,
              imagen,
              url: pokemon.url,
              types: types,
            })
          } catch (innerErr) {
            console.error('Error fetching details for', pokemon.name, innerErr)
          }
        }

        const db = getFirestore(app);
        const pokemonsCollection = collection(db, 'pokemons');
        const consulta = await getDocs(pokemonsCollection);
        const pokemonsArray = consulta.docs.map( (doc) => ({id: doc.id, ...doc.data()}));
        setPokemons(pokemonsArray);
      } catch (error) {
        console.error('Error fetching pokemons list', error)
      }
    }
    fetchData()
  }


  return (
    <div>
        <h2>Lista de cartas de Pokemons</h2>
        <ProductList pokemons={pokemons}></ProductList>
        {pokemons.length === 0 && <button onClick={handleAddPokemons}>Cargar cartas de Pokemons</button>}
        
    </div>
  )
}

export default Productos