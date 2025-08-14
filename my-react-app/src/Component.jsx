import React, {useState} from 'react'

function Component(){

    const [name,setName] = useState("Guest");
    const [quantity , setQuentity] = useState();
    const [comment , setComment] = useState("");

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handeleQuantityChange(event){
        setQuentity(event.target.value);
    }

    function handeleCommentChange(event){
        setComment(event.target.value)
    }
    return(
        <>
            <div>
                <input type="text" value={name}
                onChange={ handleNameChange} />
                <p>Name : {name}</p>
                <input type="number" value={quantity}
                onChange={ handeleQuantityChange} />
                <p>Number : {quantity}</p>
                <textarea value={comment} placeholder='enter text here'
                type="text"
                onChange={ handeleCommentChange} />
                <p>Comment : {comment}</p>
            </div>
        </>
    )

}

export default Component;