
import React, {useState} from 'react'

function UpdateState(){

    const[foods , setFoods] = useState(["apple" , "banana"]);

    function handleaddFood(){
            const newFood = document.getElementById("foodInput").value;
            document.getElementById("foodInput").value = "";

            setFoods(f=> [...f,newFood])

    }
    function handleRemovefood(index){
        
        setFoods(foods.filter((_, i) => i !== index
        ));

    }


    return(
        <>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food , index) => 
                <li key={index}
                 onClick={() => handleRemovefood(index)}>
                    {food}
                    </li>
                )}
            </ul>
            <input type="text" id='foodInput' placeholder='Enter food name ' />
            <button onClick={handleaddFood}>Add Food</button>
            
        </>
    )

}

export default UpdateState;