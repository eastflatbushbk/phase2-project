import React from "react";
import TaskCard from "./TaskCard";

function TaskList ({tasks, onMoveTask,onSetTrue}){
    const displayCards = tasks.map((item)=>(
        <TaskCard tasks={item} key={item.id}
         onTaskClick ={onMoveTask} onCompleteClick ={onSetTrue}  />
    ))
    return(
        <div >
      <ul >
      {displayCards}
      </ul>
    </div>
    )

}
export default TaskList