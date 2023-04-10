import React from 'react'
import "../styles/nav.css"
import Burgerlogo from "../images/burgerlogo.png"
import { NavLink } from 'react-router-dom'
function navbar() {
    return (
        <div className="navbardiv">
            <img src={Burgerlogo} alt="" className='burgerlogoimg' />
            <div className="alllink">
                <NavLink to={"/"}> Anasayfa </NavLink>
                <NavLink to={"/Menu"}> Menu </NavLink>
                <NavLink to={"/Hakkımızda"}> Hakkımızda </NavLink>
                <NavLink to={"/Iletişim"}> Iletişim </NavLink>

            </div>
        </div>
    )
}

export default navbar