import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: nanoid(), task: "Sample task", isDone: false}],       
    //initialising state variable --> todos array in which all the tasks will be added as individual objects
};

export const todoSlice = createSlice({
    name: "todo",
    initialState, 
    reducers: {
        addTodo: (state, action)=>{   //first reducer function to add tasks to todo list
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            };

            state.todos.push(newTodo);
        },
        deleteTodo: (state, action)=>{   //second reducer function to delete tasks from todo list
            state.todos = state.todos.filter((todo)=> todo.id!= action.payload);
        },
        markAsDone: (state, action)=>{    //third reducer function to mark tasks as done in todo list
            const todoToggle = state.todos.find((todo)=> todo.id === action.payload);

            if(todoToggle){
                todoToggle.isDone = !todoToggle.isDone;
            }
        },
    },
});


export const {addTodo, deleteTodo, markAsDone} = todoSlice.actions;  //exporting the reducers to get accessed by other files
export default todoSlice.reducer;