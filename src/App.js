import { useEffect, useState } from 'react';
import { Switch , Route} from "react-router-dom";
import Headers from './Header';
import NavBar from './NavBar';
import TaskPage from './TaskPage';
import NewTaskForm from './NewTaskForm';
import DoneTasks from './DoneTasks';

function App() {
   const [tasks , setTasks] = useState([])
   
   const [trashTasks , setTrashTasks] = useState([])

   useEffect(()=>{
    fetch(" http://localhost:3000/tasks")
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
    const updatedDisplay = tasks.filter((item) => item.id !== taskToMove.id)
      setTasks(updatedDisplay)

    }
    function handleDelete(deletedTask){
      const updatedDisplay = tasks.filter((item) => item.id !== deletedTask.id)
      setTasks(updatedDisplay)
      
      const updatedTrashTask = trashTasks.filter((item)=> item.id !== deletedTask.id)
      setTrashTasks(updatedTrashTask)
    }

    function handleSetTrue (modifiedTask){
       console.log(modifiedTask)
     // const  updatedtasks= Object.assign(tasks,modifiedTask) 
      const copyOfTasks = [...tasks]
const taskToUpdate = copyOfTasks.find(task => task.id === modifiedTask.id)
console.log(taskToUpdate)
const idx = copyOfTasks.indexOf(taskToUpdate)
console.log(idx)
copyOfTasks.splice(idx, 1, modifiedTask)
console.log(copyOfTasks)       
     
      
      setTasks(copyOfTasks)
    }

  return (
    <div >
      <Headers />
        <NavBar />
         <Switch>
           <Route exact path="/">
             <TaskPage tasks={tasks} onMoveTask={handleMovetask}
             onSetTrue={handleSetTrue}/>
            </Route>
           <Route exact path="/add">
             <NewTaskForm onAddTask={handleAddtask}/>
            </Route>
           <Route exact path="/done">
             <DoneTasks tasks={trashTasks} onRemoveTask={handleDelete} 
             onSetTrue={handleSetTrue}/>
            </Route>
         </Switch>
      </div>
  );
}

export default App;
