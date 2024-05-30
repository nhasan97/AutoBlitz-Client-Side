import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import SurveyorMenu from "./SurveyorMenu";
import useUserRole from "../../hooks/useUserRole";
import AdminMenu from "./AdminMenu";
import { HiMenuAlt3 } from "react-icons/hi";
import { showToastOnError } from "../../utilities/displayToast";
import MainLogo from "../shared/MainLogo";

const Sidebar = () => {
  const { user, logoutUser } = useAuth();
  const [, , role, ,] = useUserRole();
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleLogout = () => {
    logoutUser()
      .then()
      .catch((err) => {
        showToastOnError(err.message);
      });
  };

  return (
    <div>
      <div className="w-full flex justify-end items-center p-5 xl:hidden fixed z-30">
        <HiMenuAlt3
          className="text-2xl  text-white "
          onClick={() => setOpenSidebar(!openSidebar)}
        />
      </div>
      {/* bg-[#F2F2F2] */}
      <div
        className={`w-64 h-screen bg-[rgb(10,10,10)] rounded-r-[36px] overflow-y-auto absolute xl:fixed z-20 xl:translate-x-0 ${
          openSidebar
            ? `translate-x-0 transition duration-300 ease-in-out`
            : `-translate-x-full transition duration-300 ease-in-out`
        }`}
      >
        <div className="w-full py-6">
          <MainLogo caller={"d"}></MainLogo>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-3 ">
          <div className="avatar">
            <div className="w-16 sm:w-20 mask mask-squircle">
              <img src={user?.photoURL} />
            </div>
          </div>
          <h1 className="normal-case text-xl sm:text-2xl text-red-600 font-medium">
            {user?.displayName}
          </h1>
          <p className="normal-case text-base sm:text-xl text-[#a5a5a5]">
            {user?.email}
          </p>
        </div>

        <div className="flex flex-col justify items-start text-[#a5a5a5] p-6">
          {role === "admin" && <AdminMenu></AdminMenu>}
          {role === "surveyor" && <SurveyorMenu></SurveyorMenu>}
          <button
            className="btn w-full text-red-600 text-base sm:text-xl mt-5"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
