import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(0)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllow) str += '0123456789'
    if (charAllow) str += "!@#$%^&*()_+={}[]:'~`<>?/ "

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numAllow, charAllow, setPassword])

  const cpoyPasswordTOClipBoard = useCallback(() => {
    passwordRef.current?.select();

    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() =>{
     passwordGenerator()
  },[length, numAllow, charAllow,passwordGenerator])
     
    
  return (
    <>
      <div
        className="w-full max-w-xl  mx-auto
        shadow-md rounded-lg px-4 py-3 my-8 text-orange-500
      bg-gray-700"
      >
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div
          className="flex shadow
      rounded-lg overflow-hidden mb-4"
        >
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={cpoyPasswordTOClipBoard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 ">
            <input
              type="range"
              min={6}
              max={15}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => {
                setNumAllow((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="numberInput"
              onChange={() => {
                setCharAllow((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
