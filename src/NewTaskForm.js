

function NewTaskForm ({onAddTask}){

    return(
        <div className="new-plant-form">
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