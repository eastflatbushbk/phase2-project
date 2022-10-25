import React, { useState } from "react";
import { Button, Card ,Grid } from "semantic-ui-react";

function TaskCard ({tasks, onTaskClick , onCompleteClick }){
    const [completeFalse , setCompleteFalse] = useState(tasks.complete)
    const [button , setButton] = useState(true)

    function handleClick(){
        fetch(`http://localhost:3000/tasks/${tasks.id}`,{
          method: "DELETE" , 
        })
         .then((resp) => resp.json())
         .then(()=> onTaskClick(tasks))
     }
    
    function handleBtn (){
           
        console.log(button)
        fetch(`http://localhost:3000/tasks/${tasks.id}`, {
  method: 'PATCH',
  body: JSON.stringify({
    complete: button,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((modifiedTask)=> onCompleteClick(modifiedTask)) 
      }

      function setTrue (){
        setButton(true)
        setCompleteFalse(button)
        console.log(button)
        handleBtn()
      }
      function setFalse (){
        setButton(false)
        setCompleteFalse(button)
        console.log(button)
        handleBtn()
      }

    return(
      <Grid columns={3} divided>
         <Grid.Row>
        <Card>
        <Card.Content>
          
          <Card.Header>{tasks.marked}</Card.Header>
          
          <Card.Description>
            {tasks.task}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
  { completeFalse ? (
            <Button basic color='green'onClick={()=>{setFalse() }}>
            completed
            </Button> ) : ( <Button basic color='green'onClick={()=>{setTrue()}}>
            click to complete
            </Button> ) }
            <Button basic color='red'onClick={handleClick}>
              X
            </Button>
          </div>
        </Card.Content>
      </Card>
      </Grid.Row>
      </Grid>
    )
}

export default TaskCard