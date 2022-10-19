import React, { useState } from "react";

function TaskCard ({tasks, onTaskClick}){
    const [complete , setComplete] = useState(true)

    function handleClick(){
        fetch(`http://localhost:3000/tasks/${tasks.id}`,{
          method: "DELETE" , 
        })
         .then((resp) => resp.json())
         .then(()=> onTaskClick(tasks))
     }

    function handleBtn (){
        setComplete((complete)=>!complete)
      }

    return(
        <li className="card">
       <h4>{tasks.marked}</h4>
        <p>{tasks.task}</p>
        <div>
         <button className="primary" onClick={handleBtn}>{complete ? "Click when complete":"completed"}</button>
        <div>
       <button onClick={handleClick}>X</button>
       </div>
      </div>
    </li>
    )
}

export default TaskCard