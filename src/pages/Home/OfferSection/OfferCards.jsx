import PropTypes from "prop-types";

const OfferCards = ({ icon, offerCardTitle, offerCardDescription }) => {
  return (
    <div className="flex justify-start items-center gap-3">
      {icon}
      <div className="border-l border-red-500 pl-5">
        <h1 className="text-base md:text-lg text-[rgba(255,255,255,0.9)] font-semibold">
          {offerCardTitle}
        </h1>
        <p className="text-sm md:text-base text-[rgba(255,255,255,0.75)]">
          {offerCardDescription}
        </p>
      </div>
    </div>
  );
};

OfferCards.propTypes = {
  icon: PropTypes.node.isRequired,
  offerCardTitle: PropTypes.string.isRequired,
  offerCardDescription: PropTypes.string.isRequired,
};

export default OfferCards;
