import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import {Provider} from 'react-redux'
import{store} from './app/Store'

function App() {
 

  return (
    <Provider store={store}>
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App
