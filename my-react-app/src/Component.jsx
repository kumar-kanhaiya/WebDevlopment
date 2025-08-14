import React, {useState} from 'react'

function Component(){

    const [name,setName] = useState("Guest");
    const [quantity , setQuentity] = useState();

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handeleQuantityChange(event){
        setQuentity(event.target.value);
    }
    return(
        <>
            <div>
                <input type="text" value={name}
                onChange={ handleNameChange} />
                <p>Name : {name}</p>
                <input type="number" value={quantity}
                onChange={ handeleQuantityChange} />
                <p>Name : {quantity}</p>
            </div>
        </>
    )

}

export default Component;