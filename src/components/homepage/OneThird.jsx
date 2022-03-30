import React from "react";

const OneThird = ({ text, description, tailwindTitleBg, tailwindDescBg }) => (
  <div className={`${tailwindTitleBg} w-1/3`}>
    <div className="flex justify-center h-12 items-center">{text}</div>
    <div className={`flex h-28 p-6 ${tailwindDescBg}`}>
      <p>{description}</p>
    </div>
  </div>
);

export default OneThird;
