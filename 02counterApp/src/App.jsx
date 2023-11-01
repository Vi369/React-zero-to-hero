import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter]= useState(10)
  const [message, setMassage] = useState("")
  // let counter = 15;
  const addValue =()=>{
    if(counter===20){
      setMassage("Bas bhai ho gya 20 se jyda nahi hoga")
    }
    else{
      counter = counter+1;
    //setCounter(counter)
    //setCounter(counter)
    //setCounter(counter)
    setCounter(preConter => preConter+1);
    }
    
  }

  const removeValue =()=>{
    if(counter ===0){
      setMassage("0 se kam nahi hoga bhai")
    }
    else{
      setCounter(counter-1);
    }
    
  }

  return (
    <>
     <h1>Chai or react {counter}</h1>
     <button 
     onClick={addValue}
     >Add {counter}</button>
     <br /><br />
     <button
     onClick={removeValue}
     >Remove {counter}</button>
     <p>message: {message}</p>
    </>
  )
}

export default App
