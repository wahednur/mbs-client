import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
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
    </>
  );
};

export default HeaderNav;
