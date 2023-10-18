import React from "react";
import "./aside.css";
import { LuBadgeHelp } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { TbHexagonLetterO } from "react-icons/tb";
import { TbHexagon3D } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa";

function Aside() {
  return (
    <div className="asidecontainer">
      <h2>
        <TbHexagonLetterO />
        Dashboard
      </h2>
      <div className="inaside">
        <p className="dashbord">
          <span className="indashbord">
            <TbHexagonLetterO />
            Dashboard
          </span>
        </p>
        <p>
          <span className="indashbord">
            <TbHexagon3D />
            Product
          </span>
          <span>
            {" "}
            <FaAngleRight />
          </span>
        </p>
        <p>
          <span className="indashbord">
            <BiUserCircle />
            Custmeors
          </span>
          <span>
            {" "}
            <FaAngleRight />
          </span>
        </p>
        <p>
          <span className="indashbord">
            <MdOutlineAccountBalanceWallet />
            Income
          </span>
          <span>
            {" "}
            <FaAngleRight />
          </span>
        </p>
        <p>
          <span className="indashbord">
            <BiSolidOffer />
            Promote
          </span>
          <span>
            {" "}
            <FaAngleRight />
          </span>
        </p>
        <p>
          <span className="indashbord">
            <LuBadgeHelp />
            Help
          </span>
          <span>
            {" "}
            <FaAngleRight />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Aside;
