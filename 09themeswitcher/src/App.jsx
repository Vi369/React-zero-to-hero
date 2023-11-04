import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import './App.css'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightMode = ()=>{
    setThemeMode("light")
  }

  const darkMode = ()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    let mode = document.querySelector('html');
     mode.classList.remove("light", "dark");
     mode.classList.add(themeMode);
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, lightMode, darkMode}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>

      </div>
     </div>
    </ThemeProvider>
  )
}

export default App
