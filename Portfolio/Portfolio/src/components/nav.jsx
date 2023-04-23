import React from 'react'
import "../styles/nav.css"
import { SiHey } from 'react-icons/si';
import {FaMoon} from "react-icons/fa"
function nav() {
    return (
        <>
        <div className='navdiv'>
            <SiHey/>
            <h2>Berk Sancak</h2>
            <SiHey/>
        </div>
        </>
    )
}

export default nav