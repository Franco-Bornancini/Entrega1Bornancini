import React from 'react'

const Contador = (props) => {

  
    return (
        <div>
            <p>{props.contador}</p>
            <button onClick={props.handleClick}>Up</button>
        </div>
    )
}

export default Contador