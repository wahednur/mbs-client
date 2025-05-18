import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const RootLayout = () => {
  return (
    <div className="overflow-hidden bg-gray-100">
      <div>
        <Header />
      </div>
      <div className="min-hight">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
