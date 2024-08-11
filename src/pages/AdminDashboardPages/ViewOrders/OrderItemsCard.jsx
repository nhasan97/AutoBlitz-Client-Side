import PropTypes from "prop-types";

const OrderItemsCard = ({ item }) => {
  const { name, brandName, type, price, imageUrl } = item;
  return (
    <tr className="text-sm">
      <td className="space-y-2">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={imageUrl} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <h2 className="font-medium">
          {name} ({brandName.toUpperCase()})
        </h2>
      </td>

      <td>{type}</td>
      <td>${price}</td>
    </tr>
  );
};

OrderItemsCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default OrderItemsCard;
