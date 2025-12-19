import { Link } from 'react-router-dom'
import '../styles/ProductList.css'

const ProductList = ({ products }) => {
    console.log(products)
    return (
        <div className="product-list">
        {products.map(product => (
            <div key={product.name} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button><Link to={`/productos/${product.name}`}>Ver pokemon</Link></button>
            </div>
        ))}
        </div>
    )
}

export default ProductList