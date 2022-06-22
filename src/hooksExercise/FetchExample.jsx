import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch';

export const FetchExample = () => {

    const [contador, setContador] = useState(1)

    const { data, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${contador}`);
    console.log(data, loading, error);
    
    const increase = () => {
        setContador(contador + 1);
    }

    const decrease = () => {
        setContador(contador - 1);
    }
    return (
        <div>
            <h2>UseFetch</h2>
            {loading ? (
                <h3>cargando...</h3>
            ) : (
                <h3>{data?.name}</h3>
            )}
            <div className='d-flex'>
                <button onClick={decrease}> -1 </button>
                <button onClick={increase}> +1 </button>
            </div>
            <hr />
        </div>
    )
}
