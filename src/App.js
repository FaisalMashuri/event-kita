import React, { Component } from "react";

import Dashboard from "./Dashboard";
import "./login.css";
import logo from "./logo.png";
import kananAtas from "./kanan-atas.png";
import kiriBawah from "./kiri-bawah.png";
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: "",
      isloggin: false,
    };
  }

  handleInput = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
  };

  handleLogin = (e) => {
    if (this.state.username === "admin" && this.state.password === "admin123") {
      this.setState({
        isloggin: true,
      });
    } else {
      this.setState({
        isloggin: false,
      });
      alert("password atau Username salah");
    }

    // e.preventDefault();
  };

  componentDidUpdate() {
    $(document).ready(function () {
      $(".hamburger").click(function () {
        $(".wrapper").toggleClass("collapse");
      });
    });
  }

  render() {
    return this.state.isloggin === false ? (
      <div class="login-wrap">
        <img class="atas-kanan" src={kananAtas} alt="" />
        <img class="bawah-kiri" src={kiriBawah} alt="" />
        <div class="login">
          <img src={logo} alt="" srcset="" />
          <form onSubmit={this.handleLogin}>
            <input
              type="text"
              name="username"
              id=""
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleInput}
            />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInput}
            />
            <button class="loginsub">Login</button>
          </form>
          <p>
            Lupa Password ? <a href="">Klik Disini</a>
          </p>
        </div>
      </div>
    ) : (
      <div>
        <Dashboard />
      </div>
    );
  }
}

export default App;
