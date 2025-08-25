import React, {useState , useEffect} from 'react'

// useEffect() = React Hook that tells React Do some code when 
// (pick one):
//  this component re render 
// this component mounts
// the state of a value 

// useeffect(function , [dependencies])

// 1. useeffect(() => {})  // runs after every re-render
// 2. useeffect(() => {},[])
// 3. useeffect(() => {}, [value]) // runs on mount + when value changes

// uses 
// Event listeners
// 2. DOM manipulation 
// 3. Subsriptions {real -time update }
// 4. Fetching Data from an API
// 5. clean up when a component unmounts


function Com(){
    const[count , setCount] = useState(0);

    useEffect(() => {
        document.title =   `Count: ${count}`
    },[]);

    function addCount(){
        setCount(c => c+1);
    }

    return(
        <>
            <p>Count : {count}</p>
            <button onClick={addCount}>Add</button>
        </>
    )
}

export default Com;