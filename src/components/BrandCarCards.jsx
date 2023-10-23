import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";

const BrandCarCards = ({ car, displayToast }) => {
  const { _id, name, brandName, type, price, description, rating, imageUrl } =
    car;

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

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productInCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          displayToast("success");
        } else {
          displayToast("failed");
        }
      });
  };

  return (
    <div className="card bg-[rgba(255,255,255,.3)] shadow-xl text-white text-lg backdrop-blur-lg">
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
          <div className="flex justify-center items-center border-l pl-2 border-gray-800">
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-gray-800"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-gray-800"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-gray-800"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-gray-800"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-gray-800"
              />
            </div>
            <p className="ml-2">{rating}</p>
          </div>
        </p>
        <div className="flex gap-4">
          <Link className="btn btn-square" to={`/product-details/${_id}`}>
            <i className="fa-solid fa-info text-lg"></i>
          </Link>
          <Link className="btn btn-square text-lg" to={`/update/${_id}`}>
            <AiTwotoneEdit></AiTwotoneEdit>
          </Link>
          <button className="btn btn-square" onClick={handleAddToCart}>
            <i className="fa-solid fa-cart-plus text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandCarCards;
