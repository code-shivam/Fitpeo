import React from "react";
import ReactApexChart from "react-apexcharts";

function Bargraph({ graphType }) {
  const series1 = [
    {
      data: [
        {
          x: "January",
          y: 10,
        },
        {
          x: "February",
          y: 18,
        },
        {
          x: "March",
          y: 13,
        },
        {
          x: "April",
          y: 18,
        },
        {
          x: "May",
          y: 20,
        },
        {
          x: "June",
          y: 23,
        },
        {
          x: "July",
          y: 25,
        },
        {
          x: "August",
          y: 22,
        },
        {
          x: "September",
          y: 26,
        },
        {
          x: "October",
          y: 27,
        },
        {
          x: "November",
          y: 28,
        },
        {
          x: "December",
          y: 30,
        },
      ],
    },
  ];

  const series2 = [25, 45, 35];

  const chartOption = {
    options: {
      chart: {
        type: graphType,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "32vh", backgroundColor: "black" }} >
      <ReactApexChart
      className="tt"
        options={chartOption.options}
        series={graphType === "bar" ? series1 : series2}
        type={graphType}
      />
    </div>
  );
}

export default Bargraph;
