import React, { useState } from 'react'

export const UseState = () => {

    //zona para usar hooks

    const [numero, setNumero] = useState(0);

    const increase = () => {
        setNumero(numero + 1);
    }

    const decrease = () => {
        setNumero(numero - 1);
    }

    return (
        <div>
            <h1>Hooks</h1>
            <hr />
            <h2>useEffect</h2>
            <h3>Counter: {numero}</h3>
            <div className='d-flex'>
                <button onClick={ decrease }> -1 </button>
                <button onClick={ increase }> +1 </button>
            </div>
            <hr />
        </div>
    )
}
