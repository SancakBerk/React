import { useState } from 'react'
import './App.css'
import Nav from './components/nav'
import Mainpage from "./components/mainpage"
import Footer from './components/footer'
function App() {

  return (
    <div className="App">
      <Nav/>
      <Mainpage/>
      <Footer/>

      
    </div>
  )
}

export default App
