import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <div className="home-bg min-h-screen">
        <div className="home-overlay">
          <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
