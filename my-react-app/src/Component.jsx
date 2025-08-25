import React, {useState} from 'react'

function Component(){

    const [name,setName] = useState("Guest");
    const [quantity , setQuentity] = useState();
    const [comment , setComment] = useState("");
    const [payment,setPayment] = useState();

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handeleQuantityChange(event){
        setQuentity(event.target.value);
    }

    function handeleCommentChange(event){
        setComment(event.target.value)
    }
    function handelePaymentChange(event){
        setPayment(event.target.value)
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

                <select value={payment} onChange={handelePaymentChange}>
                    <option value="">Select an option</option>
                    <option value="visa" >VISA</option>
                    <option value="Mastercard" >MasterCard</option>
                    <option value="Giftcard" >GiftCard</option>
                    <option value="COD" >COD</option>
                </select>
                <p>Payment: {payment}</p>
            </div>
        </>
    )

}

export default Component;