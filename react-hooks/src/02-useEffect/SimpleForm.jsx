// EL HOOK  useEffect es utilizado para ejecutar efectos secundarios

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
  
    const [formState, setFormState] = useState({
        username: 'Gerardo',
        email: 'Gerardo@gmail.com'
    });

    const { username, email} = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    /// Se ejecutara cada que el use effect se dispare, este es disparado
    /// cuando el simple form se vuelve a redibujar, por ejemplo al momento
    /// de cambiar el username o email
    ///
    /// Para evitar que se dispare en todo momento, se debe de añadir las 
    /// dependencias correspondientes 
    useEffect( () => {
        console.log('Use effect call');
    }, [] ); //dependencies
    // si se deja un arreglo vacio [], significa que solo se busca que se llame una
    // unica vez cuando el componente es montado, similar al buildWhen en flutter
    // se recomienda crear efectos especificos por cada accion que se desee realizar
  
    // Este use effect solo se ejecutara cuando el formulario cambie
    useEffect( () => {
        console.log('form state changed');
    }, [formState] );

    useEffect( () => {
        console.log('email changed');
    }, [email] );

    
    

    return (
    <>
        <h1>Simple form</h1>
        <hr/>
        <input
            type="text"
            className='form-control'
            placeholder='username'
            name='username'
            value={username}
            onChange={onInputChange}
        />

        <input
            type="email"
            className='form-control mt-2'
            placeholder='email@email.com'
            name='email'
            value={email}
            onChange={onInputChange}
        />

        {
            (username === 'Gerardo2') && <Message />
        }
    </>
  )
}
