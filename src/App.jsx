import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import { Home } from "./components/Home";
import Details from "./components/Details";
import { Link, Route, Routes } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="h-screen flex ">
      <Link to={"/"}>Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
