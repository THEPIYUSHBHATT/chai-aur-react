import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(counter+1)

  }

  const removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Chai Lenge </h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>add{counter}</button>

      <br />
      <br />

      <button onClick={removeValue}>sub{counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
