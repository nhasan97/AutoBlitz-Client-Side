import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import useUserRole from "../../hooks/useUserRole";
import AdminMenu from "./AdminMenu";
import { HiMenuAlt3 } from "react-icons/hi";
import { showToastOnError } from "../../utilities/displayToast";
import MainLogo from "../shared/MainLogo";

const Sidebar = ({ handleGoBack }) => {
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
      <div className="w-full flex justify-between items-center p-4 md:px-10 xl:hidden fixed z-20">
        <i
          className="fa-solid fa-arrow-left text-lg text-white"
          onClick={handleGoBack}
        ></i>
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

        <div className="w-full flex flex-col justify-center items-center gap-3">
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

        <div className="flex flex-col justify items-start text-[#a5a5a5] p-6 overflow-y-auto">
          {role === "admin" && <AdminMenu></AdminMenu>}
        </div>

        <div className="text-center">
          <button
            className="btn w-2/3 text-red-600 text-base sm:text-lg"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  handleGoBack: PropTypes.func.isRequired,
};

export default Sidebar;
