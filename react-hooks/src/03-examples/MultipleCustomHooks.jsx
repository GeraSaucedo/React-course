
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { LoadingQuote, Quote } from './index';


export const MultipleCustomHooks = () => {

    const { counter, increment} = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  
    const { author, quote } = !!data && data[0] ; // si la data tiene un valor, entonces toma la data en la posicion cero

    return (
    <>
        <h1>Breaking bad Quotes</h1>
        <hr/>

        {
            isLoading
                ?  <LoadingQuote /> 
                : (
                    <>
                        <Quote author={author} quote={quote} /> 
                        <button className='btn btn-primary' onClick={increment}>
                            Next quote
                        </button>
                    </>
                )
        }
        
        
    </>
  )
}



