import React from "react";
import Navbar from "../Navbar/Navbar";
import Bargraph from "../Graph/Bargraph";
import Pie from "../Graph/Pie";
import "./main.css";
import Topseaction from "./Topseaction";
import Table from "./Table";

function Main() {
  return (
    <div className="maincontainer">
      <Navbar />
      <Topseaction />
      <div className="graphs">
        <div className="bartext">
          <div className="insidebartext">
            <p className="aline">
              <span className='fontweight'>Overview</span>
              <br />
              <spen className="colertext">Monthly Earning</spen>
            </p>
            <select className="colertext">
              <option>Qurataly</option>
              <option>halfyearly</option>
            </select>
          </div>
          <Bargraph />
        </div>{" "}
        <div className="pietext">
          <p className="aline">
            <span className='fontweight'>Customer</span>
            <br />
            <span className="colertext">Customer that buy product</span>
          </p>
          <Pie />
        </div>
      </div>
      <Table />
    </div>
  );
}

export default Main;
