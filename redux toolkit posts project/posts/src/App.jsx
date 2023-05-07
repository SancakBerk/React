import { useState } from 'react'
import './App.css'
import Form from './components/form'
import Postlist from './components/postlist'


function App() {
  return (

    <div className="App">
        <Form/>
        <h1>Posts</h1>
        <Postlist/>
    </div> 
  )
}

export default App
