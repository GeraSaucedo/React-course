import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHooks = () => {
  
    const [counter, setCounter] = useState(10);

   const incrementFather = useCallback(
      (value) => {
        setCounter ((count) => count + value);
      },
      [],
    )
    
    return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr />

        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
