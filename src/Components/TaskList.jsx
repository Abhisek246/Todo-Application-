import React from 'react'
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TaskInput from "./TaskInput";
import './TaskList.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function TaskList({done, todos, deleteTask, markAsDoneTask}) {  //accepting information as props from parent component --> Todo
  
  return (
    <div>
        <h2>To-Do Application</h2>
        <div className='todoApp'>
          <TaskInput/>
          <div className="listContainer">
            <ul className="list">
                {todos.map((todo)=> (
                    <li key={todo.id} className="task"><span style={todo.isDone ? (done && {textDecorationLine: "line-through", fontWeight: "700", color: "red"}) : {}}>
                        <Checkbox {...label} onClick={()=> markAsDoneTask(todo.id)} />{todo.task}</span>
                        <Button variant="contained" color="error" onClick={()=> deleteTask(todo.id)} style={{marginLeft: "15px"}}>Delete</Button>
                    </li>
                ))}
            </ul>
          </div>
        </div>
    </div>
  );
};

