import React, { useEffect } from 'react'

export const Texto = () => {
    useEffect(() => {
        console.log('se monto texto');
        return () => {
            console.log('se desmonto texto');
        }
    }, [])
    return (
        <div>
            <p>Esto es un texto de ejemplo</p>
        </div>
    )
}
