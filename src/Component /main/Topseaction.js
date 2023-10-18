import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import { LuDatabaseBackup } from "react-icons/lu";
import { BsFillBucketFill } from "react-icons/bs";
import{GoArrowUp} from "react-icons/go"


function Topseaction() {
  const data = [
    {
      name: "Earning",
      amount: "$198K",
      increment: "7%",
      class: "green universal",
      image: <AiOutlineDollar/>,
    },
    {
      name: "Orders",
      amount: "$2.4K",
      increment: "2%",
      class: "blue universal",
      image: <RiPagesLine/>,

    },
    {
      name: "Balence",
      amount: "$2.4K",
      increment: "2% ",
      class: "aqua universal",
      image:<LuDatabaseBackup/>
    },
    {
      name: "Total sale",
      amount: "$89K",
      increment: `6% `,
      class: "pink universal",
      image:<BsFillBucketFill/>
    },
  ];
  return (
    <div className="inmain">
      {data.map((el, key) => (
        <div key={key} className="circleitems">
          {" "}
          <p className={el.class}> {el.image}</p>{""}
          <p className="text">
            <span className="colertext">{el.name}</span>
            <span className='fontweight'>{el.amount}</span>
            <span>
              <span className="greentext"><GoArrowUp/> {el.increment}</span> this month
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Topseaction;
