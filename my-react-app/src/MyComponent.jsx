import React, {useState} from 'react'

function MyComponent(){

   const [name , setName] = useState("Guest");
   const [age , setAge] = useState(0);

    const updateName = () =>{
        
        setName("kanhaiya singh");
        
    }
    const incrementAge =() =>{
        setAge(age + 1 );
    }
    const decrementAge =() =>{
        setAge(age - 1 );

    }
    const resetAge = () =>{
        setAge(0);
    }


    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            
            
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment</button>
            <button onClick={resetAge}>Reset</button>
            <button onClick={decrementAge}>Decrement</button>
            
        </div>
    )

}
export default MyComponent