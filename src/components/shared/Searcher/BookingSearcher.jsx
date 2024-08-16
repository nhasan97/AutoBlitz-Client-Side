import PropTypes from "prop-types";

const BookingSearcher = ({ setSearch }) => {
  return (
    <input
      tabIndex={0}
      type="text"
      name="searchText"
      placeholder="Search by order id, customer name, email, status and date"
      className="input w-full bg-transparent border border-orange-600 focus:border-red-600 text-white"
      onChange={(e) => {
        setSearch(e.target.value);
      }}
    />
  );
};

BookingSearcher.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default BookingSearcher;
