import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import './Todo.css'
export default function Todolist(){
  const [task, settask] = useState("");
  const [todo , settodo] = useState([])

  let UpdateTodo = (event) =>{
    settask(event.target.value);
    
}

 let addlist = ()=>{
    if(task.trim() !== ""){
        settodo((prevTodo) => [...prevTodo ,  { text: task, completed: false }])
        settask("");
    }
 }

 let toggleCompletion = (index) => {
    settodo((prevTodo) =>
      prevTodo.map((item, idx) =>
        idx === index
          ? { ...item, completed: !item.completed } // Toggle the "completed" field
          : item
      )
    );
  }
 

    return (
        <div className='Todolist'>
         <h1>Todo list</h1>
         <TextField id="outlined-basic" label="Task To Add" variant="outlined"  value={task} onChange={UpdateTodo}/>
         <Button  variant="contained" style={{width :"55px", height : "55px", marginLeft:"10px", borderRadius : "50%"}} onClick={addlist}>
          Add
         </Button>
           
           <div className="list_item">
        
            {
                todo.length === 0 ? (
                    <p>List is Emplty</p>
                ) : (
                
                    <ol>  

                 { todo.map((item , index) => (
                    <div key={index} className='todo-item-wrapper'>
                    <li style={{textDecoration : item.completed ? "line-through" : "none"}} className='todo-item'>{item.text}</li>
                   <FormControlLabel
                    control = {<Checkbox checked={item.completed} onChange={() =>toggleCompletion(index)}/>}
                     label = "completed"
                 />
                    </div>
                ))}
             </ol>
           )}
           </div>
        

        </div>
    )
}