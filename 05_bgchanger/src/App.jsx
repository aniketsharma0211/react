import { useState } from "react"

function App() {

  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 px-3 rounded-xl">
          <button className="outline-none px-4"
          style={{background: "red"}}
          onClick={()=>setColor("red")}
          >Red</button>
          <button className="outline-none px-4"
          style={{background: "green"}}
          onClick={()=>setColor("green")}
          >Green</button>
          <button className="outline-none px-4"
          style={{background: "blue"}}
          onClick={()=>setColor("blue")}
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
