import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/SliderItem.css";
import first from "../images/first.jpg";
import second from "../images/second.jpg";
import third from "../images/third.jpg";

function SliderItem() {
  return (
    <Carousel>
      <Carousel.Item className="slideritem">
        <img className="d-block w-100" src={first} alt="First slide" />
        <Carousel.Caption>
          <h3 className="titleparagraph">Aliva Priva Jardin</h3>
          <p className="dollar">
            <p>$ 50 000</p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={second} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="titleparagraph">Asatti Garden City</h3>
          <p className="dollar">
            <p>$ 60 000</p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={third} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="titleparagraph">Citralan Puri Serang</h3>
          <p className="dollar">
            <p>$ 70 000</p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderItem;
