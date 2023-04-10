import { useState } from 'react'
import './App.css'
import {Route,Routes} from "react-router-dom"
import MainMenu from './componenets/mainMenu'
import About from "./componenets/about"
import Menu from "./componenets/menu"
import Contact from "./componenets/contact"
import Navbar from './componenets/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element={<MainMenu/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/Hakkımızda" element={<About/>} />
        <Route path="/Iletişim" element={<Contact/>} />
      </Routes>

    </div>
  )
}

export default App
