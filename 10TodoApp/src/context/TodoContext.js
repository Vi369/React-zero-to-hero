import {createContext, useContext} from 'react'


export const TodoContext = createContext({
    todos: [
        {
            id: 111,
            todo: "haanji",
            Completed: false
        }
    ],
    addTodo: (todo)=>{},
    deleteTodo: (id)=>{},
    updateTodo: (id, todo)=>{},
    toggleCompleted: (id)=>{}
});

export const useTodo =()=>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;

