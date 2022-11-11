import React from 'react'
import { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    }

  return (
    <>
        <h1>Focus screen</h1>
        <hr />

        <input 
            type="text" 
            placeholder='Ingrese su nombre'
            className='form-control'
            ref={inputRef}
        />

        <button className='btn btn-primary mt-2' onClick={onClick}>
            set focus
        </button>
    </>
  )
}
