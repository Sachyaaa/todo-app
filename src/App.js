import './App.css';
import {useState} from 'react';
import Task from './Task';


function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange =(e)=>{
    setNewTask(e.target.value);
  };

  const addTask =()=>{
    const task = {
      taskname: newTask,
      key: todoList.length ? todoList[todoList.length -1].key +1 : 0,
      completed: false
    };
    setTodoList([...todoList, task]);
  }

  const deleteTask =(key)=>{    
    setTodoList(todoList.filter((task)=> task.key !== key));
  }

  const completeTask =(key)=>{    
    setTodoList(
      todoList.map((task)=>{
        return (task.key===key ? {...task, completed: true} : task);
      })
    );
  }

  return (
    <div className="App">
      <div className="addTask">
        <input placeholder='Task name' type="text" 
        onChange={handleChange}/>
        <button onClick={addTask}>+</button>
      </div>

      <div className="list">
        {todoList.map((task)=>{
          return (
            <Task task={task} completeTask={completeTask} deleteTask={deleteTask}/>
          );
          })}
      </div>
    </div>
  );
}

export default App;
