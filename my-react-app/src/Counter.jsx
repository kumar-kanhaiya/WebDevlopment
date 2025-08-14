import React, {useState} from 'react'

function Counter(){
    const [count , setCount] = useState(0);

    const Increment =() =>{
        setCount(count + 1 );
    }
    const Decrement =() =>{
        setCount(count - 1 );

    }
    const Reset= () =>{
        setCount(0);
    }

    return (

        <>
            <div className='counter-conatiner'> 
                <p className='count-display'>{count}</p>
                <button className='counter-button' onClick={Decrement}>Decrement</button>
                <button className='counter-button' onClick={Reset}>Reset</button>
                <button className='counter-button' onClick={Increment}>Increment</button>
            </div>
        </>

    )

}
export default Counter;