import React from "react";
import "./style.css";
import GudangGaram from "./Ellipse 2.png";

function Sponsor() {
  return (
    <div className="sponsor">
      <h5>Sponsor</h5>
      <h4>Total Sponsor</h4>
      <ul>
        <li>400</li>
        <li>
          <a>See more</a>
        </li>
      </ul>

      <h4>Top 4 Sponsor</h4>
      <ol>
        <li>
          <div className="top-sponsor">
            <img src={GudangGaram} />
            <a>Gudang Garam</a>
          </div>
        </li>
        <li>
          <div className="top-sponsor">
            <img src={GudangGaram} />
            <a>Gudang Garam</a>
          </div>
        </li>
        <li>
          <div className="top-sponsor">
            <img src={GudangGaram} />
            <a>Gudang Garam</a>
          </div>
        </li>
        <li>
          <div className="top-sponsor">
            <img src={GudangGaram} />
            <a>Gudang Garam</a>
          </div>
        </li>
      </ol>
    </div>
  );
}
export default Sponsor;
