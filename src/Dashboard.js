import React, { Component } from "react";

import Navbar from "./component/Navbar/Navbar";
import Sidebar from "./component/Sidebar/Sidebar";
import MainContent from "./component/MainContent/MainContent";
import "./App.css";
import "./script.js";

class Dashboard extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <MainContent />
      </div>
    );
  }
}

export default Dashboard;
