import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Outlet } from "react-router-dom";
import TopUserNav from "../components/navbars/TopUserNav";
import DashSidebar from "../components/sidebaar/DashSidebar";

const DashLayout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex overflow-hidden bg-gray-100">
      <div
        className={`${
          open ? "w-[280px] opacity-100" : "-ml-[285px]"
        } duration-500`}
      >
        <DashSidebar />
      </div>
      <div className={`${open ? "w-[calc(100%-280px)]" : "w-full"}`}>
        <div className="w-full border-b border-b-gray-500 h-14 md:h-[88.4px] shadow-md ">
          <div className="flex justify-between items-center h-full w-full">
            <div className="h-full flex justify-between items-center w-14">
              <button
                onClick={() => setOpen(!open)}
                className="bg-txt-primary px-5 h-14 py-4 text-white text-2xl hover:bg-txt-primary/80 cursor-pointer duration-300"
              >
                {open ? <FaArrowLeft /> : <FaArrowRight />}
              </button>
            </div>
            <div className="w-20">
              <TopUserNav dahHide={`hidden`} />
            </div>
          </div>
        </div>
        <div className="p-6 overflow-x-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashLayout;
