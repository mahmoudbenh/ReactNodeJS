import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import ReactDOM from "react-dom/client";
import pic2 from "../image/pic2.jpg";
import { useState } from "react";
import "./page.css";
import { useNavigate } from "react-router-dom";
function Page4() {
  const [Num, updateNum] = useState("");
  let navigate = useNavigate();
  function verif(e) {
    e.preventDefault();
    if ("94480912" !== Num) {
      alert("incorrect");
    } else {
      navigate("/welcome");
    }
  }
  return (
    <>
      <center>
        <img src={pic2} />
      </center>
      <form id="f1" name="f1" method="post" onSubmit={verif}>
        <label>
          <div align="center">
            <pre>
              {" "}
              <strong>numero de telephone: </strong>
              <input
                name="t1"
                type="text"
                id="t1"
                onInput={(event) => updateNum(event.target.value)}
              />
            </pre>
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
export default Page4;
