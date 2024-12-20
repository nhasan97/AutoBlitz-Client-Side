import PropTypes from "prop-types";

const ServiceSearcher = ({ setSearch }) => {
  return (
    <input
      tabIndex={0}
      type="text"
      name="searchText"
      placeholder="Search by title and description"
      className="input w-full bg-transparent border border-orange-600 focus:border-red-600 text-white"
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
