import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Rating } from "@smastrom/react-rating";

import {
  showToastOnError,
  showToastOnSuccess,
} from "../utilities/displayToast";
import StarRating from "./StarRating";

const CarCards = ({ car, caller }) => {
  const { _id, name, brandName, type, price, rating, imageUrl } = car;

  const handleAddToCart = () => {
    console.log(car);

    const productInCart = {
      carId: _id,
      name,
      brandName,
      type,
      price,
      imageUrl,
    };

    fetch(
      "https://b8-a10-brand-shop-server-side-8yni0jrx6-nhs-projects-704a9e8f.vercel.app/cart",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(productInCart),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          showToastOnSuccess("success");
        } else {
          showToastOnError("failed");
        }
      });
  };

  return (
    <div
      className={`card bg-[rgba(255,255,255,.3)] shadow-xl text-white text-lg ${
        caller === "PopularMakesSection" ? "mx-2" : ""
      } backdrop-blur-lg`}
    >
      <figure>
        <img src={imageUrl} alt="Shoes" className="w-full h-[200px]" />
      </figure>
      <div className="card-body gap-6 p-0 px-4 py-5 justify-center ">
        <h2 className="card-title capitalize text-2xl text-black font-semibold">
          {name}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>

        <div className="card-actions">
          <div className="badge badge-outline capitalize">{brandName}</div>
          <div className="badge badge-outline capitalize">{type}</div>
        </div>

        <p className="flex justify-start items-center gap-4">
          <span className="">$ {price}</span>
          <StarRating rating={rating}></StarRating>
        </p>

        <div className="flex gap-4">
          <Link className="btn btn-square" to={`/product-details/${_id}`}>
            <i className="fa-solid fa-info text-lg"></i>
          </Link>

          <button className="btn btn-square" onClick={handleAddToCart}>
            <i className="fa-solid fa-cart-plus text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

CarCards.propTypes = {
  car: PropTypes.object.isRequired,
  caller: PropTypes.string.isRequired,
};

export default CarCards;
