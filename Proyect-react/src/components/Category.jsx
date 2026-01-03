import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { app } from './../firebaseConfig';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import ProductList from "./ProductList";


const Category = () => {

    const { type } = useParams();
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
      const db = getFirestore(app);
      const collectionRef = collection(db, 'pokemons');
      const filtro = query(collectionRef, where('types', 'array-contains', type));
      const consulta = getDocs(filtro);
      consulta.then( (response) => {
        const pokemonsArray = response.docs.map( (doc) => {
          return {id: doc.id, ...doc.data()}
        });
        setPokemons( pokemonsArray );
      }).catch( (error) => {
        console.log("Error al obtener los documentos", error);
      });
    }, [type]);
    return (
        <div>
            <h2>Categorías</h2>
            <div>
                <ProductList pokemons={pokemons}></ProductList>
            </div>
        </div>
    )
}

export default Category