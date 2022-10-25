import React from "react";
import TaskList from "./TaskList";

function TaskPage ({tasks, onMoveTask,onSetTrue}){

    return(
        <main>
      <strong>Click X to add task to Delete page</strong>
       <TaskList tasks={tasks} onMoveTask={onMoveTask}
       onSetTrue={onSetTrue} />
    </main>

    )
}
export default TaskPage