import { useState } from 'react'

import './App.css'

function App() {

  const [counter, setCounter] = useState(0) 

  // let counter = 5

   const add = () => {
     if (counter < 20) {
       setCounter((prevCounter) => Math.min(prevCounter + 1, 20))
     }
   }

   const sub = () => {
     if (counter > 0) {
       setCounter((prevCounter) => Math.max(prevCounter - 1, 0))
     }
   }
  return (
    <>
      <h1>chai and react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={add}>Add</button>
      <br />
      <button onClick={sub}>Sub</button>
      
      <p>footer: {counter}</p>
    </>
  )
}

export default App
