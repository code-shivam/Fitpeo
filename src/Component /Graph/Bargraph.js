import React from "react";
import "./graph.css"

function Bargraph() {
    const data = [
        {
          height: 19,
          name: "Jan",
        },
        {
          height: 16,
          name: "Feb",
        },
        {
          height: 25,
          name: "Mar",
        },
        {
          height: 20,
          name: "Apr",
        },
        {
          height: 23,
          name: "May",
        },
        {
          height: 10,
          name: "Jun",
        },
        {
          height: 23,
          name: "Jul",
        },
        {
          height: 25,
          name: "Aug",
        },
        {
          height: 23,
          name: "Sep",
        },
        {
          height: 20,
          name: "Oct",
        },
        {
          height: 18,
          name: "Nov",
        },
        {
          height: 20,
          name: "Dec",
        },
      ];
  return (
    <div className="bargraph">
      {data.map((el, key) => (
        <div key={key} className="inbargraph">
          <span className={el.name =="Aug"?"bluebar bar":"bar"} style={{ height: `${el.height}vh` }}></span>
          <span className="fontsize"> {el.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Bargraph;
