import React from 'react'
import "../styles/mainpage.css"
import photo from "../images/Photo.jpg"
import image1 from "../images/Screenshot_1.png"
import image2 from "../images/Screenshot_2.png"
import image4 from "../images/Screenshot_4.png"
import image5 from "../images/Screenshot_6.png"
import image6 from "../images/Screenshot_7.png"

function mainpage() {
  return (
    <div className="mainpagediv">
      <div className='flexrow'>
        <div className="info">
          <h1> Hello!</h1>
          <h2>Berk Sancak</h2>
          <h3>Front End Developer</h3>
          <p>Hi I'm Berk Sancak, I study computer engineer departman in Eskişehir. I am interested in Web Developement so I develop myself in this subject
            I have knowledge of HTML,CSS,JavaScript and React. I use React for my web Pages.
          </p>
          <p>There is a github link of mine below. In this link there are projects I have worked on.  </p>
          <h5> <a href="https://github.com/SancakBerk">https://github.com/SancakBerk</a> </h5>

        </div>
        <div className="image" >
        </div>
      </div>

      <h2 className='projectsh2' >Projects</h2>
      <div className="slidemain">
        <div className="slide">
          <div className="slideitem" >
            <img src={image1} alt="" />
          </div>
          <div className="slideitem" >
            <img src={image2} alt="" />
          </div>
          <div className="slideitem" >
            <img src={image4} alt="" />
          </div>
          <div className="slideitem" >
            <img src={image5} alt="" />
          </div>
          <div className="slideitem" >
            <img src={image6} alt="" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default mainpage