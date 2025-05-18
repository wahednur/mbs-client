import { Link } from "react-router-dom";
import useRole from "../../hooks/useRole";
import MemberMenu from "../dashboard/menus/MemberMenu";
import UserMenu from "../dashboard/menus/UserMenu";
import LogOut from "../shared/log-out/LogOut";
import AdminMenu from "./../dashboard/menus/AdminMenu";

const DashSidebar = () => {
  const [role] = useRole();
  return (
    <div className="w-full h-screen flex flex-col justify-between bg-txt-primary">
      <div>
        <Link to={"/"}>
          <div className="bg-white h-14 md:h-[88.4px]">
            <img className="md:p-5 py-2 px-5 h-14 md:h-full" src="/wbms.svg" />
          </div>
        </Link>
        <div className="text-white">
          <h2 className="capitalize text-2xl p-5 bg-success">
            {role} Dashboard
          </h2>{" "}
          {role === "admin" && <AdminMenu />}
          {role === "user" || (role === "pending" && <UserMenu />)}
          {role === "member" && <MemberMenu />}
        </div>
      </div>
      <div className="px-5 relative bottom-10 w-full">
        <LogOut className={"w-full"} />
      </div>
    </div>
  );
};

export default DashSidebar;
