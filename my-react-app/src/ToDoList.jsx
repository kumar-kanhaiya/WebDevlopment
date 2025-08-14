import React, {useState} from 'react'

function ToDoList(){

    const [tasks , setTask] = useState(["take breakfast"
        , "take shower" 
    ]);

    const [newTask , setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
        event.target.value = " ";
    }
    function addTask(){
        if(newTask.trim() !== ""){

            setTask(t => [...t , newTask])
            setNewTask("");
        }
        

    }
    function deleteTask(index){
        setTask(tasks.filter((_,i) => i!==index ))

    }
    function moveTaskUp(index){

    }
    function moveTaskDown(index){

    }

    return(
        <>
            <div className='to-do-list'>
                <h1>TO DO LIST</h1>

                <div>
                    <input type="text"
                    placeholder='Enter a Task...' 
                    value={newTask}
                    onChange={handleInputChange}/>
                    <button className='add-button' onClick={addTask}>
                        Add
                    </button>
                </div>

                <ol>
                    {tasks.map((task , index) => 
                    <li key={index}>
                        <span className='text'> {task}</span>
                        <button className='delete-button'
                         onClick={()=>deleteTask(index)}>
                            Delete
                        </button>
                        <button className='move-button'
                         onClick={()=>moveTaskUp(index)}>
                            👆
                        </button>
                        <button className='move-button'
                         onClick={()=>moveTaskDown(index)}>
                            👇
                        </button>
                    </li> )}
                </ol>

            </div>
        </>
    )
}

export default ToDoList;