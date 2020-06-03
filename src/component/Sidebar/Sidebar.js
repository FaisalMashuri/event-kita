import React from "react";
import "./style.css";

function Sidebar() {
  return (
    <div class="sidebar">
      <ul>
        <li>
          <a href="#">
            <span class="icon">
              <i class="fas fa-book"></i>
            </span>
            <span class="title">Dashbboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <i class="fas fa-video"></i>
            </span>
            <span class="title">Dashbboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <i class="fas fa-volleyball-ball"></i>
            </span>
            <span class="title">Dashbboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <i class="fas fa-blog"></i>
            </span>
            <span class="title">Dashbboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon">
              <i class="fas fa-leaf"></i>
            </span>
            <span class="title">Dashbboard</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
