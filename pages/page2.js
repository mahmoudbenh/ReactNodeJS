import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import data from "../pages/data.json";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./page2.css";
function Txt1(text) {
  return <h1>Bienvenue !</h1>;
}

function Txt2(text) {
  return <h1>Veuillez remplir le tableau</h1>;
}
function Ok(text) {
  const isLoggedIn = text.isLoggedIn;
  if (isLoggedIn) {
    return <Txt1 />;
  }
  return <Txt2 />;
}
function Page2() {
  const [contacts, setContact] = useState(data);
  const [text, updateText] = useState(false);

  return (
    <>
      <center>
        <table width="200" border="1" style={{}}>
          <tr>
            <td>first name</td>
            <td>last name</td>
            <td>e-mail</td>
            <td>age</td>
            <td>avatar</td>
          </tr>
          {contacts.map((i) => (
            <tr>
              <td>{i.firstName}</td>
              <td>{i.lastName}</td>
              <td>{i.email}</td>
              <td>{i.age}</td>
              <td>
                <img src={i.avatar} />
              </td>
            </tr>
          ))}
        </table>
        <center>
          <label>
            <input
              name="checkbox1"
              type="checkbox"
              value="checkbox"
              checked="checked"
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="checkbox2"
              value="checkbox"
              onClick={() => updateText(!text)}
            />
          </label>
        </center>
        <Ok isLoggedIn={!text} />
        <button>
          <Link to="/page3">suivant</Link>
        </button>
      </center>
      <table width="1277" border="0">
        <tr>
          <th width="100" bgcolor="#000000" scope="row" height="2">
            <span class="Style1">
              ........................................................
            </span>
          </th>
          <td width="823">
            <div class="content">
              <span
                class="message"
                data-text="Voici un texte qui doit défiler ---------------------------------- "
              >
                ------------------------------------Voici un texte qui doit
                défiler----------------------{" "}
              </span>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
}
export default Page2;
