import React, { useEffect, useState } from 'react'
import { Texto } from './Texto';

export const UseEffect = () => {
    const [numero, setNumero] = useState(0);
    const [aparecer, setAparecer] = useState(false)

    const increase = () => {
        setNumero(numero + 1);
    }

    useEffect(() => {
        document.title = `${numero}`;
    }, []);

    return (
        <div>
            <h2>UseEffect</h2>
            <h3>Counter: {numero}</h3>
            <div className='d-flex'>
                <button onClick={increase}> +1 </button>
            </div>
            <h3>Aparecer texto</h3>
            {aparecer ? <Texto /> : null}
            <button onClick={()=>setAparecer(!aparecer)}>Aparecer</button>
            <hr />
        </div>
    )
}
