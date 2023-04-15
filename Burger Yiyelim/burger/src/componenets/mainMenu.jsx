import React from 'react'
import "../styles/mainmenu.css"
import Image from "../images/banneryeni.jpg"
import { Link } from 'react-router-dom'
import Footer from './footer'

function mainMenu() {
  return (
    <>
      <div className="mainmenudiv">
          <div className="image">
          <img src={Image} alt="" className='imageitself' />
          <Link to={"/Menu"}>
            <button className='Siparişverbutton'> Sipariş Ver </button>
          </Link>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default mainMenu