import PropTypes from "prop-types";
const NoData = ({ text }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="font-rac text-2xl sm:text-3xl lg:text-6xl text-white font-bold">
        {text}
      </h1>
    </div>
  );
};

NoData.propTypes = {
  text: PropTypes.string.isRequired,
};
export default NoData;
