import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";

const MainLogo = ({ caller }) => {
  return (
    <Link
      className={`w-fit font-rac normal-case text-xl text-white flex ${
        caller === "d" ? "justify-center" : "justify-start hidden md:flex"
      } items-center text-2xl`}
      to="/"
    >
      <img src={logo} alt="" className="w-[20%]" />
      AutoBlitz
    </Link>
  );
};
MainLogo.propTypes = {
  caller: PropTypes.string.isRequired,
};
export default MainLogo;
