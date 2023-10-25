import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import "./page.css";
import { useState } from "react";
import pic from "../image/pic.jpg";
import Welcome from "../pages/welcome";
import Page4 from "../pages/page4";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
  const [mail, updateMail] = useState("");
  const [mp, updateMp] = useState("");
  let navigate = useNavigate();

  function verif(e) {
    e.preventDefault();
    if ("abc@gmail.com" != mail) {
      alert("mail incorrect");
    } else if ("azerty" != mp) {
      alert("mot de passe incorrect");
    } else {
      navigate("/welcome");
    }
  }
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <img src={pic} width="300" />
      </center>
      <form id="f1" name="f1" method="post" onSubmit={verif}>
        <label>
          <div align="center">
            <pre>
              {" "}
              <strong>e-mail: </strong>
              <input
                name="t1"
                type="text"
                id="t1"
                onInput={(event) => updateMail(event.target.value)}
              />
            </pre>
            <strong>mot de passe</strong>
            <input
              name="t2"
              type="password"
              id="t2"
              onInput={(event) => updateMp(event.target.value)}
            />
            <br />
            <Link to="/page4">mot de passe oubliée</Link>
          </div>
        </label>
        <p align="center">
          <label></label>
        </p>
        <p align="center">
          <label>
            <div align="center">
              <input type="submit" name="Submit" value="Envoyer" />
            </div>
          </label>
        </p>
      </form>
    </>
  );
}
export default Login;
