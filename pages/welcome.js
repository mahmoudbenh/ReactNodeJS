import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import image from "../image/mbh.jpg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./page.css";
function Welcome() {
  function header() {
    var t1 = document.getElementById("t1");
    t1.setAttribute("style", "color:blue");
  }

  return (
    <div>
      <center>
        <img src={image} />
      </center>
      <br />
      <br />
      <center>
        <h1 id="t1" style={{ color: "red" }}>
          Bonjour
        </h1>
      </center>
      <br />
      <br />
      <center>
        <button onClick={header}>click</button>
      </center>
      <center>
        <Link to="/Page1">suivant</Link>
      </center>
      <br />
    </div>
  );
}
export default Welcome;
