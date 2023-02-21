import React from "react"; 
import './Task.css';

const Task = (props) =>{
    return (
        <div className='task' 
            style={{backgroundColor: props.task.completed?"rgb(157, 247, 167)" : "aliceblue"}}>
              <h1>{props.task.taskname}</h1>
              <div className='btns'>
              <button className='done' onClick={()=>props.completeTask(props.task.key)}>&#10003;</button>
              <button className='delete' onClick={()=>props.deleteTask(props.task.key)}>X</button>
              </div>
            </div>
    )
}

export default Task;