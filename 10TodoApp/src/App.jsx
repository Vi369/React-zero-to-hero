import { useEffect, useState } from 'react'
import {TodoProvider} from './context'
import './App.css'
import TodoForm from './components/TodoFrom'
import TodoItem from './components/TodoItem'

function App() {
  // all functionlity 

  const [todos, setTodos] = useState([])
  
  const addTodo = (todo)=>{
    setTodos((prevTodos)=> [{id: Date.now(), ...todo}, ...prevTodos])
  }

  const updateTodo =(id, todo)=>{
    setTodos((prevTodos)=> (prevTodos.map( (eachTodo)=> (eachTodo.id=== id ? todo: eachTodo) )))
  }

  const deleteTodo = (id)=>{
    setTodos((prevTodos)=> prevTodos.filter( (todo)=> todo.id !==id));
  }

  const toggleCompleted =(id)=>{
    setTodos( (prevTodos)=>prevTodos.map( (todo)=> (todo.id === id ?{...todo, completed: !todo.completed} : todo)))
  }

  // local storage
  useEffect(
    ()=>{
      const todos = JSON.parse(localStorage.getItem("todos"));
      if(todos && todos.length >0){
        setTodos(todos);
      }
    },[])

    // set data in local storage
    useEffect(()=>{
      localStorage.setItem("todos", JSON.stringify(todos));
    },[todos])
  return (
   <TodoProvider value={{todos,addTodo, deleteTodo, updateTodo, toggleCompleted}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map( (todo)=> (
                          <div key={todo.id}
                          className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ) )}
                    </div>
                </div>
            </div>
   </TodoProvider>
  )
}

export default App
