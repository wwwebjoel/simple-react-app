import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-7 items-center">
        <div className="h-12 w-12 bg-red-200"></div>
        <ul className="flex space-x-7">
          <MainHeaderMenuSingleItem text="Home" link="/" />
          <MainHeaderMenuSingleItem text="Industries" link="/industries" />
          <MainHeaderMenuSingleItem text="Services" link="/services" />
          
        </ul>
      </div>
      <div className="flex space-x-7 items-center">
        <div>My Account</div>
        <div className="bg-blue-500 text-white px-4 py-1">Subscribe</div>
      </div>
    </div>
  );
};

const MainHeaderMenuSingleItem = ({text, link})=>(
  <li>
    <Link to={link}>
      <div className="flex space-x-2">
        <div>{text}</div>
        <div><i className="fa fa-caret-down text-black"></i></div>
      </div>
    </Link>
  </li>
)

export default MainHeader;