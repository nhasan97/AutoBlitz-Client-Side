import PropTypes from "prop-types";

const BrandCard = ({ brand, handleBrandCardClick }) => {
  const { name, image } = brand;

  return (
    <div
      className="group sm:w-[200px] sm:h-[200px] flex flex-col justify-center items-center gap-4 text-[rgba(255,255,255,.65)] sm:border-2 sm:border-[rgba(255,255,255,.65)] transition ease-out delay-100 hover:text-red-600 hover:border-red-500 hover:shadow-md hover:shadow-red-500 sm:rounded-full"
      onClick={() => handleBrandCardClick(name)}
    >
      <img
        src={image}
        alt=""
        className="w-[40%] h-[40%] sm:w-[50%] sm:h-[50%] transition ease-out delay-100 group-hover:scale-125"
      />
      <h1 className="text-base md:text-lg font-medium">{name}</h1>
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object.isRequired,
  handleBrandCardClick: PropTypes.func.isRequired,
};

export default BrandCard;
