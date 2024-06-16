/* eslint-disable no-unused-vars */
// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Details from "./components/Details";
import Work from "./components/Work";
import About from "./components/About";

const App = () => {
  return (
    <>
      {" "}
      <div className="App w-full h-full ">
        <Navbar></Navbar>
        <Hero></Hero>
        <Content></Content>
        <Details></Details>
        <Work></Work>
        <About></About>
      </div>
    </>
  );
};

export default App;
