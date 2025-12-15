
import './App.css'
import Header from './components/Header'
import Init from './pages/Init'
import Productos from './components/Productos'
import Contacto from './components/Contacto'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Init></Init>}></Route>
        <Route path='/productos' element={<Productos></Productos>}></Route>
        <Route path='/contacto' element={<Contacto></Contacto>}></Route>
      </Routes>
    </>
  )
}

export default App
