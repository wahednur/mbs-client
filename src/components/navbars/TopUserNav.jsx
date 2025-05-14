import { useEffect, useRef, useState } from "react";
import { FaBars, FaUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "../shared/buttons/Button";
import LinkBtn from "../shared/links/LinkBtn";
const TopUserNav = ({ setMblOpen, mblOpen }) => {
  const { user, logOut } = useAuth();
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
        {user?.email ? (
          ""
        ) : (
          <LinkBtn title={"Login"} link={"login"} btnType={"btn-filled"} />
        )}
        <button onClick={() => setMblOpen(!mblOpen)} className="lg:hidden">
          <FaBars />
        </button>
        <button
          ref={buttonRef}
          onClick={() => setOpen(!open)}
          className={`user-nav`}
        >
          {user?.email ? (
            <img
              className="w-10 h-10 rounded-full"
              src={user?.photoURL}
              alt={user?.displayName}
              referrerPolicy="no-referrer"
            />
          ) : (
            <FaUser />
          )}
        </button>
      </div>
      <div
        ref={menuRef}
        className={`user-nav-container ${open ? "open" : "-right-[1000px]"}`}
      >
        <div className="flex gap-2 items-center">
          {user?.email ? (
            <img
              className="w-12 h-12 rounded-full"
              src={user?.photoURL}
              alt={user?.displayName}
              referrerPolicy="no-referrer"
            />
          ) : (
            <FaUser className="w-12 h-12 rounded-full text-primary" />
          )}{" "}
          <div className="flex flex-col justify-center">
            <p className="font-semibold">{user?.displayName}</p>
            <small className="text-xs">{user?.email}</small>
            <span>{user?.role}</span>
          </div>
        </div>
        <hr className="text-gray-400" />
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/my-profile"}>My Profile</NavLink>
          </li>
          <li>
            <Button
              clickEvent={async () => await logOut()}
              title={`Log out`}
              btnType={`btn-filled`}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopUserNav;
