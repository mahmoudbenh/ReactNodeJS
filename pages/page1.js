import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import ReactDOM from "react-dom/client";
import "./page.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import image2 from "../image/m.jpg";
import image from "../image/mbh.jpg";
import { Carousel } from "react-bootstrap";

function Page1() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="second slide" />
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <center>
        <button>
          <Link to="/page2">suivant</Link>
        </button>
      </center>
    </>
  );
}

export default Page1;
