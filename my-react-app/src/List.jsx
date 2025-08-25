import { useLayoutEffect } from "react";


function List(props){

    // const fruits = [{name:"apple" , calories: 95},
    //                  {name:"orange", calories: 45},
    //                  {name:"banana", calories: 105},
    //                  {name: "pineapple" , calories: 38}
    //                 ];
    // fruits.sort();
    const list = props.items;
    const category = props.category;

    

    const listitem = list.map(item => <li key={item.name}>
        {item.name} &nbsp; <b>Calories :
         {item.calories}</b>
         </li>)
    return(
        <>  
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listitem}</ol>
        </>
        
    ); 
}
export default List;