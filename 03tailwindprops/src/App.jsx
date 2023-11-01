import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-blue-500 px-5 py-2 rounded-md'>Tailwind test</h1>
      <Card name="vikas"/>
      <Card/>
      <Card/>
    </>
  )
}

export default App
