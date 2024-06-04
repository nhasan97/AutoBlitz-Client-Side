import PropTypes from "prop-types";

const ServiceSearcher = ({ setSearch }) => {
  return (
    <input
      tabIndex={0}
      type="text"
      name="searchText"
      placeholder="Search by name, brand and type"
      className="input w-full"
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
  );
};

ServiceSearcher.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default ServiceSearcher;
