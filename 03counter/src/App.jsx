import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useState to change state - propogates to dom.
  const [counter, setCounter] = useState(15)

  const addValue  = ()=>{
    console.log("addValue");
    setCounter(counter+1)
    //counter++;
  }

  const reduceValue  = ()=>{
    console.log("reduceValue");
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>
        chai aur react
      </h1>
      <h2>
        Counter Value: {counter}
      </h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={reduceValue}>Reduce Value</button>
      <p>{counter}</p>
    </>
  )
}

export default App
