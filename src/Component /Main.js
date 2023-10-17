import React from "react";
import Navbar from "./Navbar";
import Bargraph from "./Bargraph";
import Pie from "./Pie";

function Main() {
  const data = [
    {
      name: "Earning",
      amount: "$198K",
      code: "&uarr;",
      increment: "37.8%",
      class: "green universal",
    },
    {
      name: "Orders",
      amount: "$2.4K",
      code: "&uarr;",
      increment: "2%",
      class: "blue universal",
    },
    {
      name: "Balence",
      amount: "$2.4K",
      code: "&uarr;",
      increment: "2% ",
      class: "aqua universal",
    },
    {
      name: "Total sale",
      amount: "$89K",
      code: "&uarr;",
      increment: `11% `,
      class: "pink universal",
    },
  ];
  const arr = [
    {
      stock: "32 in Stock",
      price: "$ 45.99",
      sales: "20",
      name: "shivam",
      para: "lorem",
      image: "photo",
    },
    {
      stock: "32 in Stock",
      price: "$ 45.99",
      sales: "20",
      name: "manish",
      para: "lorem",
      image: "photo",
    },
  ];
  return (
    <div className="main">
      <Navbar />
      <div className="roundee">
        {data.map((el, key) => (
          <div key={key} className="round">
            {" "}
            <p className={el.class}>1</p>{" "}
            <p className="small">
              <span>{el.name}</span>
              <span>{el.amount}</span>
              <span>
                <span>
                  {el.code} {el.increment}
                </span>{" "}
                this month
              </span>
            </p>
          </div>
        ))}
      </div>
      <div className="chart">
        <div className="table">
          <div className="tableinside">
            <p className="aline">
              <span>Overview</span>
              <br />
              Monthly Earning
            </p>
            <select>
              <option>Qurataly</option>
              <option>halfyearly</option>
            </select>
          </div>
          <Bargraph graphType="bar" /> 
        </div>{" "}
        <div className="pia">
          <p className="aline">
            <span>Customer</span>
            <br />
            Customer that buy product
          </p>
          <Bargraph graphType="donut" />
        </div>
      </div>
      <div className="tabledt">
        <div className="all">
          <h2>Prouct Sale</h2>
          <div>
            <input type="search" placeholder="search" />
            <select>
              <option>Last 30 day </option>
              <option>Last 15 day </option>
            </select>
          </div>
        </div>
        <table>
          <thead>
            <tr className="tablerow">
              <th className="product">Product Name </th>
              <th>Stock</th>
              <th>Price</th>
              <th>Total sales</th>
            </tr>
          </thead>
          <hr />
          <tbody>
            {arr.map((el, key) => (
              <tr key={key} className="tablerow">
                <td className="product">{el.image}</td>
                <td>{el.stock}</td>
                <td>{el.price}</td>
                <td>{el.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Main;
