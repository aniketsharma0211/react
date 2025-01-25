import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let name1 = "Aniket";
  let name2 = "Sharma"
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl">Tailwind Test</h1>
      <Card channel="aniketsharma" firstName={name1}/> 
      <Card channel="aniketsharma" /> 
    </>
  )
}

export default App
