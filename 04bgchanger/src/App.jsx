import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-300" style={{backgroundColor: color}}>
      <div className="fixed left-10 w-35 flex flex-col gap-10 mx-auto rounded-2xl px-2 py-2 bg-[#212121]">
        <button className="py-2 px-4 rounded-xl drop-shadow-lg text-white bg-red-700 hover:opacity-50"
        onClick={()=>setColor("red")}>Red</button>
        <button className="py-2 px-4 rounded-xl drop-shadow-lg text-white bg-green-700 hover:opacity-50"
        onClick={()=>setColor("green")}>Green</button>
        <button className="py-2 px-4 rounded-xl drop-shadow-lg text-white bg-blue-700 hover:opacity-50"
        onClick={()=>setColor("blue")}>blue</button>
        <button className="py-2 px-4 rounded-xl drop-shadow-lg text-white bg-orange-700 hover:opacity-50"
        onClick={()=>setColor("orange")}>orange</button>
        <button className="py-2 px-4 rounded-xl drop-shadow-lg text-white bg-pink-700 hover:opacity-50"
        onClick={()=>setColor("pink")}>pink</button>
        <button className="py-2 px-4 rounded-xl drop-shadow-lg text-white bg-purple-700 hover:opacity-50"
        onClick={()=>setColor("purple")}>purple</button>
        <button className="py-2 px-4 rounded-xl drop-shadow-lg text-black bg-white hover:opacity-50"
        onClick={()=>setColor("white")}>white</button>
        <button className="py-2 px-4 rounded-xl drop-shadow-lg text-white bg-yellow-700 hover:opacity-50"
        onClick={()=>setColor("yellow")}>yellow</button>
        <button className="py-2 px-4 rounded-xl drop-shadow-lg text-white bg-[olive] hover:opacity-50"
        onClick={()=>setColor("olive")}>olive</button>
      </div>
      
    </div>
    </>
  )
}

export default App
