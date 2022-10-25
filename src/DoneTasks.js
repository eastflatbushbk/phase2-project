import React from "react";
import TaskCard from "./TaskCard";

function DoneTasks({tasks , onRemoveTask, onSetTrue }){
    const tasksToBeDeletedList = tasks.map((item) => (
        <TaskCard key={item.id} tasks={item} onTaskClick={onRemoveTask}
        onCompleteClick ={onSetTrue} />
      ));
    return(
        <div>
            <strong>Click X to delete task forever</strong>
            <ul className="cards">
           {tasksToBeDeletedList}
           </ul>
        </div>

    )
}
export default DoneTasks