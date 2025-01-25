import { useState } from 'react'
import Chaitest from './Chai'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chaitest/>
      <h1>test</h1>
    </>
  )
}

export default App
