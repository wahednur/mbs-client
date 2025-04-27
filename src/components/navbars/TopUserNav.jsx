import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Button from "../shared/buttons/Button";
import LinkBtn from "../shared/links/LinkBtn";
const TopUserNav = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  // setOpen(false) ousite click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="relative">
      <div className="flex items-center gap-2 ">
        <LinkBtn title={"Login"} link={"login"} btnType={"btn-filled"} />
        <button>
          <FaBars />
        </button>
        <button
          ref={buttonRef}
          onClick={() => setOpen(!open)}
          className={`user-nav`}
        >
          <FaUser />
        </button>
      </div>
      <div
        ref={menuRef}
        className={`user-nav-container ${open ? "open" : "-right-[1000px]"}`}
      >
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
