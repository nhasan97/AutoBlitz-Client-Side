import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import useAuth from "../../hooks/useAuth";
import useUserRole from "../../hooks/useUserRole";
import MainLogo from "../shared/MainLogo";

const Navbar = () => {
  const { logoutUser } = useAuth();

  const [user, loading, role, roleLoading, , refetchRole] = useUserRole();

  refetchRole();

  const handleSignOut = () => {
    logoutUser()
      .then((result) => {
        console.log(result);
        // setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const links = (
    <div className="text-[#757575] text-base font-medium space-x-8">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all-cars">All Cars</NavLink>
      <NavLink to="/all-servicing">All Services</NavLink>
      {loading || roleLoading ? (
        <span className="loading loading-dots loading-xs"></span>
      ) : user && role === "admin" ? (
        <NavLink to="/dashboard/orders">Dashboard</NavLink>
      ) : user && role === "customer" ? (
        <>
          <NavLink to="/my-cart">My Cart</NavLink>
          <NavLink to="/my-orders">Order History</NavLink>
        </>
      ) : (
        ""
      )}
    </div>
  );

  return (
    <div className="w-full h-fit py-2 bg-transparent">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="navbar  text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="w-24 menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box"
              >
                {links}
              </ul>
            </div>

            <MainLogo caller={"n"}></MainLogo>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end gap-6">
            {user && (
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar hidden sm:flex"
              >
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
            )}
            {user && <p className="hidden sm:flex">{user.displayName}</p>}
            {user ? (
              <Link className="btn normal-case" onClick={handleSignOut}>
                Logout
              </Link>
            ) : (
              <Link className="btn normal-case" to="/login">
                Login/Reg
              </Link>
            )}
          </div>
        </div>
        {/* <div className="navbar text-white py-4 px-[148px]">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <Link className="font-rac normal-case text-xl flex" to="/">
              <img src={logo} alt="" className="w-[20%]" />
              AutoBlitz
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end gap-6">
            {user && (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
            )}
            {user && <p>{user.displayName}</p>}
            {user ? (
              <Link className="btn normal-case" onClick={handleSignOut}>
                Logout
              </Link>
            ) : (
              <Link className="btn normal-case" to="/login">
                Login/Reg
              </Link>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
