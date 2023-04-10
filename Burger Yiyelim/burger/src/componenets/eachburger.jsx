import React from 'react'
import "../styles/eachburger.css"
import Burger from "../images/burger.jpg"
function eachburger({DataName}) {
  console.log(DataName.image)
  return (
    <div className="eachburgercard" >
      <img src={Burger} alt="" />
      <h1>{DataName.name}</h1>
      <p>{DataName.content}</p>
      <p>{DataName.price} TL</p>

    </div>
  )
}

export default eachburger