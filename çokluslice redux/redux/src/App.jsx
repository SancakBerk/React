import { useState } from 'react'
import './App.css'
import Courseform from './componenets/courseform'
import Coursesearch from './componenets/coursesearch'
import Courselist from './componenets/courselist'
import Coursevalue from './componenets/coursevalue'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Courseform />
      <Coursesearch />
      <Courselist />
      <Coursevalue />
    </div>
  )
}

export default App
