import React from "react";
import TaskCard from "./TaskCard";

function TaskList (){
    const displayCards = tasks.map((item)=>(
        <TaskCard tasks={item} key={item.id} onTaskClick ={onMoveTask} />
    ))
    return(
        <div>
      <ul className="cards">
      {displayCards}
      </ul>
    </div>
    )

}
export default TaskList