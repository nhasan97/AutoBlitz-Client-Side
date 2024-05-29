import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className=" bg-black flex flex-col xl:flex-row relative">
      <Sidebar></Sidebar>
      <div className="flex-1 xl:ml-64 relative">
        <i
          className="fa-solid fa-arrow-left text-xl text-white absolute top-[55px] left-5 sm:top-6 sm:left-10"
          onClick={handleGoBack}
        ></i>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
