import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        // setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-product">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/my-cart">My Cart</NavLink>
      </li>
    </>
  );

  //bg-[rgba(255,255,255,0.75)]

  return (
    <div className="bg-transparent relative z-10">
      <div className="navbar text-white py-4 px-[148px] absolute top-0 left-0">
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
      </div>
    </div>
  );
};

export default Navbar;
