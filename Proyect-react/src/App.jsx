
import './App.css'
import Header from './components/Navbar'
import Init from './pages/Init'
import Productos from './components/Productos'
import Contacto from './components/Contacto'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductDetail from './components/ProductDetail'
import CarritoPage from './components/CarritoPage'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Init></Init>}></Route>
        <Route path='/productos' element={<Productos></Productos>}></Route>
        <Route path='/productos/:name' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='/contacto' element={<Contacto></Contacto>}></Route>
        <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
      </Routes>
    </>
  )
}

export default App
