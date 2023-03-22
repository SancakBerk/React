import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const dogrumu ="true";
  return(
  <>
  {dogrumu ? <p>evetdogru:{dogrumu}</p> : <p>degil :</p> }
  <div style={
    {
      width: '100px',
      height: '100px',
      backgroundColor: 'blue'
    }}>
    
  </div>
  </>
  )
}

export default App
