import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username, password});
        //yha tha gali object pass ni kita tha isliye
        console.log({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange={(e)=> setUsername(e.target.value)} placeholder='Username' />
        <input type="text"
         value={password}
         onChange={(e)=>setPassword(e.target.value) } placeholder='Password' />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login