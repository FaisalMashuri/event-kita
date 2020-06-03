import React from "react";
import Trafic from "./Trafic/Trafic";

import { Line } from "react-chartjs-2";
import "./style.css";
import LastEvent from "./LastEvent/LastEvent";
import EmailStatistic from "./EmailStatistic/EmailStatistic";
import Sponsor from "./Sponsor/Sponsor";
import MediaPartner from "./MediaPartner/MediaPartner";

function MainContent() {
  const lineChart = (
    <Line
      data={{
        labels: ["2020", "2021", "2022", "2023"],
        datasets: [
          {
            label: "Media Partner",
            data: [2, 4, 3, 5],
            borderColor: "#ac183b",
            fill: false,
            borderWidth: 3,
          },
        ],
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      }}
    />
  );

  return (
    <div class="main_container">
      <div class="lineChart">
        <Trafic />
        {lineChart}
      </div>
      <LastEvent />
      <EmailStatistic />
      <Sponsor />
      <MediaPartner />

      {/* <div class="item">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex illo fugit
        officia vitae blanditiis ratione, provident, assumenda sit neque
        asperiores dicta velit iusto, eos est sint maiores beatae ea harum?
      </div>
      <div class="item">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex illo fugit
        officia vitae blanditiis ratione, provident, assumenda sit neque
        asperiores dicta velit iusto, eos est sint maiores beatae ea harum?
      </div> */}
    </div>
  );
}
export default MainContent;
