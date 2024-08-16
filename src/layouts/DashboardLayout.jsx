import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className=" bg-black flex flex-col xl:flex-row relative">
      <Sidebar handleGoBack={handleGoBack}></Sidebar>
      <div className="flex-1 xl:ml-64 relative">
        <i
          className="hidden xl:flex fa-solid fa-arrow-left text-xl text-white absolute top-6 left-10"
          onClick={handleGoBack}
        ></i>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
