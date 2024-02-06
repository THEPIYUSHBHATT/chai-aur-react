import './App.css'
import Card from './components/card.jsx'
function App() {


  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>

      <Card username="chai" btnText="click me " />

      <Card username="code" btnText="click me " />
    </>
  )
}

export default App
