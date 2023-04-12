import { useState } from 'react'
import './App.css'
import GeneralForm from './components/GeneralForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GeneralForm/>
    </div>
  )
}

export default App
