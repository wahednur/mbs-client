import React from "react";
import { FaBars, FaUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Button from "../shared/buttons/Button";
import LinkBtn from "../shared/links/LinkBtn";
const TopUserNav = () => {
  return (
    <div className="relative">
      <div className="flex items-center gap-2 ">
        <LinkBtn title={"Login"} link={"login"} btnType={"btn-filled"} />
        <button>
          <FaBars />
        </button>
        <button className="bg-primary text-white cursor-pointer hover:bg-btn duration-300 flex items-center justify-center w-10 h-10 rounded-full">
          <FaUser />
        </button>
      </div>
      <div className="absolute top-12 right-0 w-[280px] bg-white p-5 drop-shadow-lg rounded-lg">
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/my-profile"}>My Profile</NavLink>
          </li>
          <li>
            <Button title={`Log out`} btnType={`btn-filled`} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopUserNav;
