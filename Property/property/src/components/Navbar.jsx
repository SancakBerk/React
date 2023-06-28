import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/navbar.css";
function Navbar() {
  const [isresponsive, setisresponsive] = useState(0);

  const clickhamburger = () => {
    const alllinks = document.querySelector(".Allinks");
    alllinks.classList.add("visible");

    const navbar = document.querySelector(".navbar");
    navbar.classList.add("responsivenavbar");

    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.add("displaynone");
    const closehamburger = document.querySelector(".closehamburger");
    closehamburger.classList.add("displayblock");
  };
  const clickclosehamburger = () => {
    const alllinks = document.querySelector(".Allinks");
    alllinks.classList.remove("visible");
    const navbar = document.querySelector(".navbar");
    navbar.classList.remove("responsivenavbar");

    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.remove("displaynone");
    const closehamburger = document.querySelector(".closehamburger");
    closehamburger.classList.remove("displayblock");
  };
  const scrolldark = () => {
    if (window.innerWidth < 900) {
      return;
    }
    const links = document.querySelectorAll(".links");
    if (window.scrollY > 955 && window.scrollY < 3172) {
      links.forEach((item) => {
        item.classList.add("darknavbar");
      });
    } else {
      links.forEach((item) => {
        item.classList.remove("darknavbar");
      });
    }
  };
  window.addEventListener("scroll", scrolldark);

  return (
    <div className="navbar">
      <div className="headertitle">
        <a href="">Berk</a>
      </div>
      <div className="hamburger" onClick={clickhamburger}>
        <MenuIcon />
      </div>
      <div className="closehamburger" onClick={clickclosehamburger}>
        <CloseIcon />
      </div>
      <ul className="Allinks">
        <a href="#Residencies" className="links">
          Residencies
        </a>
        <a href="#Ourval" className="links">
          Our Value
        </a>
        <a href="#Contactus" className="links">
          Contact Us
        </a>
        <a href="#getstartedid" className="links">
          Get Started
        </a>
        <a href="#contactme" className="links">
          Contact Developer
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
