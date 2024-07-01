import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import TextField from '@mui/material/TextField';
import './TaskInput.css';

export default function TaskInput(){
    let [task, setTask] = useState("");   //state variable for adding tasks in list
    let dispatch = useDispatch();  //used useDispatch hook for triggering an action 

    let handleChange = (e)=>{
        e.preventDefault();
        if(task){
            dispatch(addTodo(task));   //used to trigger an action of adding tasks to list
        }
        setTask("");  //input field becomes empty once the form is submitted
    };
    
    return (
        <>
        <form onSubmit={handleChange} className="form">
            <TextField id="outlined-basic" label="Task" variant="outlined" type="text" onChange={(e)=> setTask(e.target.value)} value={task}/>
            <button className="button">ADD</button>
        </form>
        </>
    );
};