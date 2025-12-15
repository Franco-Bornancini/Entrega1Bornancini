import React, { useState } from 'react'
import Contador from './Contador'

const ContadorContainer = () => {

    const [contador, setContador] = useState(0)

    const handleClick = () => {
        setContador(contador + 1)
        console.log(contador)
    }

    return (
        <div>
            <Contador contador={contador} handleClick={handleClick}></Contador>
        </div>
    )
}

export default ContadorContainer