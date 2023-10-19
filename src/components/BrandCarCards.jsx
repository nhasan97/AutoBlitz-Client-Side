import { Link } from "react-router-dom";

const BrandCarCards = ({ car }) => {
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
          alert("inserted");
        } else {
          alert("not inserted");
        }
      });
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body gap-6">
        <h2 className="card-title capitalize">
          {name}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <div className="card-actions">
          <div className="badge badge-outline capitalize">{brandName}</div>
          <div className="badge badge-outline capitalize">{type}</div>
        </div>
        <p className="flex justify-start items-center gap-4">
          <span className=" border-r-2 border-gray-800">${price}</span>
          <div className="flex justify-center items-center">
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                checked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>
            {rating}
          </div>
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-4">
            <Link className="btn" to={`/product-details/${_id}`}>
              Details
            </Link>
            <Link className="btn" to={`/update/${_id}`}>
              Update
            </Link>
          </div>

          <button className="btn w-full" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandCarCards;
