import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import "./page.css";
import vid from "../image/vid.mp4";
import image from "../image/mbh.jpg";
import Card from "react-bootstrap/Card";
import { ListGroup, ListGroupItem } from "react-bootstrap";
function Page3() {
  return (
    <>
      <center>
        <video src={vid} autoPlay="true" width={1500} />
      </center>
    </>
  );
}
export default Page3;
