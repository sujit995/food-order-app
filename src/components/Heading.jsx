import React from "react";

const Heading = ({ text, subtext }) => {
  return (
    <div className="w-[100%] d-flex flex-col">
      <div className="text-[30px] font-[600] text-white m-0">{text}</div>
      <div className="text-[14px] font-[500] text-white m-5">{subtext}</div>
    </div>
  );
};

export default Heading;
