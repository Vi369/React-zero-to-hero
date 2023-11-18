import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {
            id: 1,
            text: "hello jii"
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        }, // hamesha hame method ke sath milti hai jise ham use karte hai
        // (state or action)
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter( (todo)=> todo.id !== action.payload);
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer;