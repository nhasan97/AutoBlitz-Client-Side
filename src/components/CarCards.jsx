import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import StarRating from "./StarRating";
import useUserRole from "../hooks/useUserRole";
import usePerformMutation from "../hooks/usePerformMutation";
import { insertItemInCart } from "../api/cartAPIs";
import Swal from "sweetalert2";

const CarCards = ({ car, caller }) => {
  const navigate = useNavigate();

  const [user, , role] = useUserRole();

  const { _id, name, brandName, type, price, rating, imageUrl } = car;

  const mutation = usePerformMutation("insertItemInCart", insertItemInCart);

  const handleAddToCart = () => {
    if (user && user.email) {
      const productInCart = {
        user_name: user?.displayName,
        user_email: user?.email,
        carId: _id,
        name,
        brandName,
        type,
        price,
        imageUrl,
      };

      mutation.mutate(productInCart);
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add items to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div
      className={`card group bg-[rgba(255,255,255,.3)] shadow-xl text-white text-lg ${
        caller === "PopularMakesSection" ? "mx-2" : ""
      } backdrop-blur-lg`}
    >
      <figure>
        <img src={imageUrl} alt="Shoes" className="w-full h-[200px]" />
        <div className="p-2 absolute right-0 top-0">
          <Link
            className="btn btn-xs btn-circle group-hover:animate-bounce"
            to={`/product-details/${_id}`}
          >
            <i className="fa-solid fa-info"></i>
          </Link>
        </div>
      </figure>
      <div className="card-body gap-4 p-0 px-4 py-5 justify-center">
        <div className="flex justify-between items-center">
          <h2 className="card-title capitalize text-xl md:text-2xl text-black font-semibold">
            {name}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <button
            className="btn btn-circle bg-transparent text-white hover:text-black border-none"
            disabled={role === "admin"}
            onClick={handleAddToCart}
          >
            <i className="fa-solid fa-cart-plus text-lg"></i>
          </button>
        </div>
        <div className="card-actions">
          <div className="badge badge-outline capitalize">{brandName}</div>
          <div className="badge badge-outline capitalize">{type}</div>
        </div>

        <p className="flex justify-start items-center gap-4">
          <span className="">$ {price}</span>
          <StarRating rating={rating}></StarRating>
        </p>

        {/* <button
          className="btn btn-sm"
          disabled={role === "admin"}
          onClick={handleAddToCart}
        >
          Add to<i className="fa-solid fa-cart-plus text-lg"></i>
        </button> */}
      </div>
    </div>
  );
};

CarCards.propTypes = {
  car: PropTypes.object.isRequired,
  caller: PropTypes.string.isRequired,
};

export default CarCards;
