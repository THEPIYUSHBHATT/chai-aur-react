import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const[name,setName]= useState('');
  
 
// const addValue = () => {
//   setCounter(counter + 1)
// }


 
  useEffect(()=>{
    const timer = setInterval(()=>{
      setCounter((prev)=>prev+1);
    },1000)

    return ()=> clearInterval(timer)
  },[]);


  //  useEffect(() => {
     
  //    console.log(name )
  //    console.log(counter)
  //  }, [name, counter])

  // const removeValue = () => {
  //   setCounter(counter-1)
  // }

  return (
    <>
   <h1>My fam</h1>

   <p>{counter}</p>

   <h3>Fam Realtime counter</h3>


    {/* <h1>Challenge</h1>
    <h2>Counter: {counter}</h2>
    <button onClick={addValue}>Increment</button>
     <p>Name : {name} </p>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  />  */}



      {/* <h1>Chai Lenge </h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>add</button>

      <br />
      <br />

      <button onClick={removeValue}>sub</button>

      <p>footer: {counter}</p> */}
    </>
  )
}

export default App
