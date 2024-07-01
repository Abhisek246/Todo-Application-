import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import { useState } from "react";
import TaskList from "./TaskList";


export default function Todo(){
    let [done, setDone] = useState(false);  //state variable to check if the checkbox is checked

    const todos = useSelector((state)=> state.todos);  //accessing the state todos array from store using useSelector hook
    let dispatch = useDispatch();  //used useDispatch hook for triggering an action 

    let deleteTask = (id)=>{
        dispatch(deleteTodo(id));  //used to trigger an action to delete tasks from list
    };

    let markAsDoneTask = (id)=>{
        dispatch(markAsDone(id));   //used to trigger an action to mark tasks as done from list
        setDone(true);
    };

    return(
        <>
        <TaskList done={done} todos={todos} deleteTask={deleteTask} markAsDoneTask={markAsDoneTask}/>  
        </>
        //sending information as props to child component --> TaskList
    );
};