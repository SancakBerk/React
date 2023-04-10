import React from 'react'
import "../styles/mainmenu.css"
import Image from "../images/banneryeni.jpg"
import { Link } from 'react-router-dom'
import Footer from './footer'

function mainMenu() {
  return (
    <>
      <div className="mainmenudiv">
        <img src={Image} alt="" className='image' />
        <Link to={"/Menu"}>
          <button className='Siparişverbutton'> Sipariş Ver </button>
        </Link>
      </div>
      <Footer/>
    </>
  )
}

export default mainMenu