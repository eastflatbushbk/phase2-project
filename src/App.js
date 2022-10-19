import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import TaskPage from './TaskPage';

function App() {
   const [tasks , setTasks] = useState([])

   useEffect(()=>{
    fetch(" http://localhost:4001/tasks")
    .then((resp)=>resp.json())
    .then((tasks)=> setTasks(tasks))
  },[])

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
