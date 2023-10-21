const PopularCarCards = ({ car }) => {
  const { _id, name, brandName, type, price, description, rating, imageUrl } =
    car;

  return (
    <div className="card bg-base-100 shadow-xl mr-4">
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
        {/* <div className="flex flex-col gap-4">
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
        </div> */}
      </div>
    </div>
  );
};

export default PopularCarCards;
