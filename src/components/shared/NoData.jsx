import PropTypes from "prop-types";
const NoData = ({ text }) => {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center">
      <h1 className="font-rac text-5xl md:text-6xl text-white text-center font-bold">
        {text}
      </h1>
    </div>
  );
};

NoData.propTypes = {
  text: PropTypes.string.isRequired,
};
export default NoData;
