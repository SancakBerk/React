import React from 'react'
import "../styles/nav.css"
import { SiHey } from 'react-icons/si';
import {FaMoon} from "react-icons/fa"
import { useState } from 'react';
function nav() {
    const [scroll, setscroll] = useState(false);

    const scrollhandling =()=>
    {
        if (window.scrollY>10) 
        {
            setscroll(true);   
        }
        else
        {
            setscroll(false)
        }
    }
    window.addEventListener("scroll",scrollhandling);

    return (
        <>
        <div className={scroll ? "navdiv scrollnav ": "navdiv"}>
            <SiHey/>
            <a href="#deneme"><h2 className='name' >Berk Sancak</h2></a>
            <SiHey/>
        </div>
        </>
    )
}

export default nav