import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderNav from "../navbars/HeaderNav";
import TopUserNav from "../navbars/TopUserNav";

const Header = () => {
  const [mblOpen, setMblOpen] = useState(false);
  return (
    <div className="bg-primary/20 py-1.5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src="/wbms.svg" className="h-10" alt="" />
          </Link>
          <HeaderNav setMblOpen={setMblOpen} mblOpen={mblOpen} />
          <TopUserNav setMblOpen={setMblOpen} mblOpen={mblOpen} />
        </div>
      </div>
    </div>
  );
};

export default Header;
