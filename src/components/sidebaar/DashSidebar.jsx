import { Link } from "react-router-dom";
import LogOut from "../shared/log-out/LogOut";

const DashSidebar = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between bg-txt-primary">
      <div>
        <Link to={"/"}>
          <div className="bg-white h-14 md:h-[88.4px]">
            <img className="md:p-5 py-2 px-5 h-14 md:h-full" src="/wbms.svg" />
          </div>
        </Link>
      </div>
      <div className="px-5 relative bottom-10 w-full">
        <LogOut className={"w-full"} />
      </div>
    </div>
  );
};

export default DashSidebar;
