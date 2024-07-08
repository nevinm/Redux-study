import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter app</h1>
      <Counter />
    </>
  )
}

export default App
