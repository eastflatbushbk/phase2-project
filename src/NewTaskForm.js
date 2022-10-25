import { useState } from "react"

const defaultData = {
    task: "",
    marked: "Least important",
    complete: false
    }

function NewTaskForm ({onAddTask}){
    const [formData, setFormData] = useState(defaultData)
    
    function handleChange(event){
        //setFormData(event.target.value)
        setFormData({
          ...formData, [event.target.name]:event.target.value,
        })
    }
        function handleSubmit(event){
            event.preventDefault()
            const createTask = {
             task: formData.task,
             marked: formData.marked,
             complete: formData.complete
            }
            fetch("http://localhost:3000/tasks",{
             method:"POST",
             headers:{
               "Content-Type" : "application/json",
             },
             body: JSON.stringify(createTask),
            })
            .then((resp)=> resp.json())
            .then((newTask)=> onAddTask(newTask));
       
            setFormData(defaultData)
     }
    return(
        <div className="new-task-form">
        <h2>New Task</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="task" placeholder="Task ..." onChange={handleChange} value={formData.task}/>
          <select name="marked"  onChange={handleChange} value={formData.marked} >
            <option value= "default" hidden>Task marked as</option>
            <option name="marked" value="least important">least important</option>
            <option name="marked"value="IMPORTANT">IMPORTANT</option>
            <option name="marked"value="URGENT!!">URGENT</option>
           </select>
          <button type="submit">Add Task</button>
        </form>
      </div>

    )
}
export default NewTaskForm