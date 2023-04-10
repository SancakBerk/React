import React from 'react'
import Eachburger from './eachburger'
import { Data } from '../helpers/data'
import "../styles/menu.css"

function menu() {
  return (
    <div className="menudiv">
    <h1 className='menuh1'>Burgerlerimiz</h1>

    <div className="burgers">
      {Data.map((each, key) => {
        return (
          <Eachburger DataName={each} key={key} />
        )
      })
      }
    </div>

  </div>
  )
}

export default menu
