import React, { useEffect } from "react";
import "../styles/mainpage.css";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Foto from "../images/entryimage.jpg";
import logos from "../images/Screenshot_1.png";
import SliderItem from "../components/SliderItem";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import Contactus from "../images/Contactus.jpg";

import CallIcon from "@mui/icons-material/Call";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Wp from "../images/wp.png";
import Call from "../images/call.png";

import Listgroup from "../components/Listgroup";
import ourValue from "../images/ourvalue.jpg";
function mainpage() {
  const [Premium, setPremium] = useState(8000);
  const [Happy, setHappy] = useState(2000);
  const [Awards, setAwards] = useState(28);
  const [phonesize, setphonesize] = useState(2000);
  function sendEmail() {
    window.location = "mailto:berksancak6161@gmail.com";
  }
  const resizehandler = (event) => {
    console.log(event);
  };
  window.addEventListener("resize", resizehandler);

  return (
    <div className="mainpage">
      <div className="discover">
        <div className="left">
          <div className="leftinside">
            <div className="margintop">
              <h1>Discover Most Suitable Property</h1>
            </div>
            <div className="margintop">
              <p>
                Find a varierty of properties that suit you very easily forget
                all difficulties in finding a residence for you
              </p>
            </div>
            <div className="location margintop">
              <div className="search">
                <div className="locationlogo">
                  <LocationOnIcon />
                </div>
                <button className="searchbutton">
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/Lens+Ya%C5%9Fam+Merkezi/@40.9265814,29.3085029,17z/data=!4m10!1m2!2m1!1zbGVucyBhbMSxxZ92ZXJpxZ8gbWVya2V6aQ!3m6!1s0x14cada10c4680731:0x2ab68c0440340d28!8m2!3d40.9266277!4d29.3112296!15sChlsZW5zIGFsxLHFn3ZlcmnFnyBtZXJrZXppWhsiGWxlbnMgYWzEscWfdmVyacWfIG1lcmtlemmSAQ9zaG9wcGluZ19jZW50ZXLgAQA!16s%2Fg%2F11c566j1pg?entry=ttu"
                  >
                    Search
                  </a>
                </button>
              </div>
            </div>
            <div className="values margintop">
              <div className="each">
                <div className="topline">
                  <p>
                    {Premium}
                    <AddIcon />
                  </p>
                </div>
                <div className="bottomline">
                  <p>Premium Product</p>
                </div>
              </div>
              <div className="each">
                <div className="topline">
                  <p>
                    {Happy} <AddIcon />
                  </p>
                </div>
                <div className="bottomline">
                  <p>Happy Customer</p>
                </div>
              </div>
              <div className="each">
                <div className="topline">
                  <p>
                    {Awards} <AddIcon />
                  </p>
                </div>
                <div className="bottomline">
                  <p>Awards Winning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="right">
          <img src={Foto} alt="" />
        </div>
      </div>

      <div className="icons">
        <img src={logos} alt="" style={{ width: "100%" }} />
      </div>
      <div className="BestChoices" id="Residencies">
        <div className="center">
          <h3 className="titleparagraph">Best Choices</h3>
          <h1 className="dollar">Popular Residencies</h1>
        </div>
        <SliderItem />
      </div>
      <hr />
      <div className="ourValue" id="Ourval">
        <div className="left">
          <img src={ourValue} alt="" />
        </div>
        <div className="right">
          <div className="headerforourvalue">
            <h2 className="dollar">Our Value</h2>
            <h1 className="titleparagraph">Value We Give to You</h1>
            <p className="ourvaluedesc">
              We always ready to help by providing the best services for you. We
              believe a good place to live can make your life better.
            </p>
          </div>
          <Listgroup />
        </div>
      </div>
      <hr />
      <div className="Contactus" id="Contactus">
        <div className="left">
          <div className="contactusheader">
            <h1 className="dollar">Contact Us</h1>
            <h2 className="titleparagraph">Easy To Contact Us</h2>
            <p className="contactuspp">
              We always ready to help by providing the best services for you. We
              believe a good place to live can make your life better.
            </p>
          </div>
          <div className="contactusall">
            <div className="Call">
              <div className="flex">
                <div className="pngdiv">
                  <img src={Call} alt="" className="callpng" />
                </div>
                <div className="number">
                  <p>0(216) 999 99 99</p>
                </div>
              </div>
              <button className="contactbutton">Call Now</button>
            </div>
            <div className="chat">
              <div className="flex">
                <div className="pngdiv">
                  <img src={Wp} alt="" className="wppng" />
                </div>
                <div className="number">
                  <p>0(216) 999 99 99</p>
                </div>
              </div>
              <button className="contactbutton">Chat</button>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={Contactus} alt="" />
        </div>
      </div>
      <hr />
      <div className="Getstarted">
        <div className="start">
          <div className="centercolumn">
            <h2>Lets Start</h2>
            <button
              className="getstartedbutton"
              id="getstartedid"
              onClick={sendEmail}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="info" id="contactme">
        <h1>Berk Sancak</h1>
        <div className="eachinfo">
          <LinkedInIcon />
          <a
            href="https://www.linkedin.com/in/berk-sancak-5086a2258/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        <div className="eachinfo">
          <GitHubIcon />
          <a href="https://github.com/SancakBerk" target="_blank">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default mainpage;
