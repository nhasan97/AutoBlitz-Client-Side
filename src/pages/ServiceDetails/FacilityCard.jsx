import PropTypes from "prop-types";

const FacilityCard = ({ facility }) => {
  const { name, details } = facility;
  return (
    <div className="bg-[rgba(255,255,255,.3)] p-10 border-t-4 border-red-600 rounded-lg">
      <h2 className="card-title text-xl md:text-2xl text-black font-semibold mb-2">
        {name}
      </h2>
      <p className="text-white text-sm md:text-base text-justify leading-7">
        {details}
      </p>
    </div>
  );
};

FacilityCard.propTypes = {
  facility: PropTypes.object.isRequired,
};
export default FacilityCard;
