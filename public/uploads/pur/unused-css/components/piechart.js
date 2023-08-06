import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const labels = ["Used", "Unused"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "",
      backgroundColor: ["#14b8a6", "#0f172a"],
      borderColor: "rgb(255,255,255)",
      data: [70, 30],
    },
  ],
};
const PieChart = () => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};
export default PieChart;
