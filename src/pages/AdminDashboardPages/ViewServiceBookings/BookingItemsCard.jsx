import PropTypes from "prop-types";

const BookingItemsCard = ({ item }) => {
  const { serviceName, servicePrice } = item;
  return (
    <tr className="text-sm">
      <td className="space-y-2">
        <h2 className="font-medium">{serviceName}</h2>
      </td>

      <td>${servicePrice}</td>
    </tr>
  );
};

BookingItemsCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default BookingItemsCard;
