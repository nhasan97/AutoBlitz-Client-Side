import PropTypes from "prop-types";

const FacilityCard = ({ facility }) => {
  const { name, details } = facility;
  return (
    <div className="bg-[#F3F3F3] p-10 border-t-4 border-[#FF3811] rounded-lg">
      <h2 className="text-[#444] text-xl font-bold mb-2">{name}</h2>
      <p className="text-[#737373] text-base text-justify leading-7">
        {details}
      </p>
    </div>
  );
};

FacilityCard.propTypes = {
  facility: PropTypes.object.isRequired,
};
export default FacilityCard;
