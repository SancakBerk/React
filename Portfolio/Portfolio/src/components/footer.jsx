import React from 'react'
import "../styles/footer.css"
import {FiInstagram} from "react-icons/fi"
import {AiOutlineMail} from "react-icons/ai"
import {BsPhone} from "react-icons/bs"
function footer() {
  return (
    <div className="footermain">
        <div className="infos">
            <div className="each">
                <FiInstagram/>
                <a href="https://www.instagram.com/sancak__berk/">Berk Sancak</a>
            </div>
            <div className="each">
                <AiOutlineMail/>
                <h4>berksancak6161@gmail.com</h4>
            </div>
            <div className="each">
                <BsPhone/>
                <h4>+90 551 606 0474</h4>
            </div>

        </div>
        <div className="title">
            <h1>BERK SANCAK</h1>
        </div>
    </div>
  )
}

export default footer