import React from 'react'
import Image from "../images/banner.png"
import "../styles/contact.css"
import Footer from './footer'
function contact() {
  return (
    <>
    <div className="contactdiv">
      <div className="imagediv">
      <img src={Image} alt="" />
      </div>

      <div className="formdiv">
        <h1>Bizimle İletişime Geçin</h1>
        
        <form action="" className='form' >
            <label className='labelname' >Ad Soyad</label>
            <input type="text" placeholder='Lütfen adınızı soyadınızı giriniz' />

            <label>Email</label>
            <input type="email" placeholder='Lütfen emailinizi giriniz' />

            <label>Mesajınız</label>
            <textarea name="text" id="" cols="30" rows="10" placeholder='Lütfen mesajınızı giriniz' ></textarea>

            <button className="sendbtn">Gönder</button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default contact