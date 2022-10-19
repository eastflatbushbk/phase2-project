import React from "react";
import TaskList from "./TaskList";

function TaskPage (){

    return(
        <main>
      <strong>Click X to add task to Delete page</strong>
       <TaskList tasks={tasks} onMoveTask={onMoveTask}/>
    </main>

    )
}
export default TaskPage