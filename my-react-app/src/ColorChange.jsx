import React, {useState} from 'react'

function ColorChange(){

    const [Color , SetColor] = useState();

    function handeleColor(event){
        SetColor(event.target.value);
    }

    return(
        <>
            <div className='container'>
                <h1>Color Picker </h1>
                <div className='color-display'
                style={{backgroundColor: Color}}>
                    <p>Selexted Color : {Color}</p>
                </div>
                <label htmlFor="">Select a Color</label>
                <input type="color" value={Color} onChange={handeleColor} />
            </div>
        </>
    )

}
export default ColorChange;