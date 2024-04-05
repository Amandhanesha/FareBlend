import "./App.css";
import img1 from "./images/img1.png";
import h1 from "./images/h1.jpg";
import  React, { Component } from 'react';
import img3 from "./images/img3.png";
//  import img4 from "./images/img4.png";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Homepage() {
  return (
    
    <div className="header">
      <script src="script.js"></script>
      <div class="menu_bar">
        <h1 className="logo">FareBlend</h1>
        <div className="menuNav">
          <Link className="login" to={"/login"}>
            Login
          </Link>
          <a href="#about_us">About us</a>
          <a href="#contact">Contact</a>{" "}
          <a class="home" href="#home">
            Home
          </a>
        </div>
      </div>
      <div className="Main">
        <div className="intro">
          <div className="intro2">
            <h1>
              Hello,
              <br />
              Welcome to fareBlend
            </h1>
            <h5>You can split expenses with groups or with individuals.</h5>
            <p>
              You can split expenses with groups or with individuals.You can
              split expenses with groups or with individuals.You can split
              expenses with groups or with individual.
            </p>
            <div class="wrapper">
              <Link to={"/Start"}>
                <button> Start Now, </button>{" "}
              </Link>
            </div>
          </div>
          <div className="img_1">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
      <div className="Main2">
        <span className="img_2">
          <img src={h1} alt="" />
        </span>
        <span className="intro3">
          <h2>
            The easiest way to share expenses with <br />
            <span style={{ color: "blue" }}>friends and family.</span>
          </h2>
        </span>
      </div>
      <div className="Main2">
        <span className="intro3">
          <h2>
            Easy bill splits,
            <br />
            <span style={{ color: "blue" }} />
            happy friends
          </h2>
        </span>
        <span className="Group_photo">
          <img src={img3} alt="" />
        </span>
      </div>
      <div className="Main4">
        <div className="child">
          <div className="container">
            <div className="logo">
              <h1>FareBlend</h1>
            </div>
            <p>
              FareBlend is a popular expense-sharing app designed to simplify
              the
              <br />
              process of splitting bills and expenses among friends, <br />
              roommates, or any group of people.
            </p>
          </div>
          <div className="container2">
            <div className="general">
              <nav>General More</nav>
            </div>
            <div className="more"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
