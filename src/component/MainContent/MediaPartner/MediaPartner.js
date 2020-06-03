import React from "react";
import Kompas from "./Ellipse 7.png";
import "./style.css";

function MediaPartner() {
  return (
    <div className="mediaPartner">
      <h5>Media Partner</h5>
      <h4>Total Media Partner</h4>
      <ul>
        <li>400</li>
        <li>
          <a>See more</a>
        </li>
      </ul>

      <h4>Top 4 Media Partner</h4>
      <ol>
        <li>
          <div className="top-media">
            <img src={Kompas} />
            <a>Gudang Garam</a>
          </div>
        </li>
        <li>
          <div className="top-media">
            <img src={Kompas} />
            <a>Gudang Garam</a>
          </div>
        </li>
        <li>
          <div className="top-media">
            <img src={Kompas} />
            <a>Gudang Garam</a>
          </div>
        </li>
        <li>
          <div className="top-media">
            <img src={Kompas} />
            <a>Gudang Garam</a>
          </div>
        </li>
      </ol>
    </div>
  );
}
export default MediaPartner;
