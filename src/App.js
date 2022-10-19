import { useEffect, useState } from 'react';
import { Switch , Route} from "react-router-dom";
import Header from './Header';
import NavBar from './NavBar';
import TaskPage from './TaskPage';
import NewTaskForm from './NewTaskForm';
import DoneTasks from './DoneTasks';

function App() {
   const [tasks , setTasks] = useState([])
   const [trashTasks , setTrashTasks] = useState([])

   useEffect(()=>{
    fetch(" http://localhost:4001/tasks")
    .then((resp)=>resp.json())
    .then((tasks)=> setTasks(tasks))
  },[])
  function handleAddtask(addedTask){
    setTasks([...tasks, addedTask])
  }
  function handleMovetask(taskToMove){
    console.log("line 29", taskToMove)
    const taskToBeTrashed = trashTasks.find(
      (task) => task.id === taskToMove.id
    );
    if (!taskToBeTrashed) {setTrashTasks([...trashTasks, taskToMove])}
    console.log("line 34", trashTasks)

    }
    function handleDelete(deletedTask){
      const updatedDisplay = tasks.filter((item) => item.id !== deletedTask.id)
      setTasks(updatedDisplay)
      const updatedTrashTask = trashTasks.filter((item)=> item.id !== deletedTask.id)
      setTrashTasks(updatedTrashTask)
    }

  return (
    <div >
      <Header />
        <NavBar />
         <Switch>
           <Route exact path="/">
             <TaskPage tasks={tasks} onMoveTask={handleMovetask}/>
            </Route>
           <Route exact path="/add">
             <NewTaskForm onAddTask={handleAddtask}/>
            </Route>
           <Route exact path="/done">
             <DoneTasks tasks={trashTasks} onRemoveTask={handleDelete}/>
            </Route>
         </Switch>
      </div>
  );
}

export default App;
