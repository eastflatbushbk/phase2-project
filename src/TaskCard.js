import React from "react";

function TaskCard (){
    const [complete , setComplete] = useState(true)

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