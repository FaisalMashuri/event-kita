import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./style.css";

function EmailStatistic() {
  const Donat = (
    <Doughnut
      data={{
        datasets: [
          {
            data: [10, 20, 30],
            backgroundColor: ["red", "blue", "yellow"],
          },
        ],
        labels: ["merah", "biru", "kuning"],
      }}
    />
  );
  return (
    <div className="donatChart">
      <h5>Email Statistic</h5>
      {Donat}
    </div>
  );
}
export default EmailStatistic;
