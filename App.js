import React from "react";
import "./App.css";
import "./pages/page1.js";
import Welcome from "./pages/welcome";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page4 from "./pages/page4";
import Page3 from "./pages/page3";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/page4" element={<Page4 />}></Route>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
        <Route path="/page3" element={<Page3 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
