import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = ({ mblOpen }) => {
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to={`apartment`}>Apartment</NavLink>
      </li>
    </>
  );
  return (
    <>
      {/* Desktop navbar start  */}
      <div className="desk-nav hidden lg:block">
        <ul className="flex items-center">{navItems}</ul>
      </div>
      {/* Desktop navbar end  */}
      {/* Mobile navbar start  */}
      <div className={`mbl-nav ${mblOpen ? "open" : ""}`}>
        <ul>{navItems}</ul>
      </div>
      {/* Mobile navbar end  */}
    </>
  );
};

export default HeaderNav;
