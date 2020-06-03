import React from "react";
import "./style.css";
import logo from "./logo.png";
import user from "./Ellipse 1.png";

function Navbar() {
  return (
    <div>
      <div className="top_navbar">
        <div className="hamburger">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
        <div className="top_menu">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul>
            <li>
              <a href="#">
                <i className="fas fa-search"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fas fa-bell"></i>
              </a>
            </li>

            <li>
              <img src={user} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
