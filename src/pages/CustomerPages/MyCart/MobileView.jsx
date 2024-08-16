import PropTypes from "prop-types";

const MobileView = ({ cartItems, handleDeleteProduct }) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:hidden w-full h-[85%] overflow-y-auto rounded-lg">
      {cartItems.map((product) => (
        <div key={product._id} className="h-fit card bg-[#f4f3f081] shadow-xl">
          <div className="card-body p-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={product.imageUrl}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>

              <p className="font-medium">{product.name}</p>
            </div>

            <div className="card-actions justify-between">
              <button
                className="btn flex-1 hover:bg-red-600 group"
                onClick={() => document.getElementById(product._id).showModal()}
              >
                <i className="fa-solid fa-circle-info group-hover:text-white"></i>
              </button>
              <dialog id={product._id} className="modal">
                <div className="modal-box text-left space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-bold">{product.name}</p>
                      <div className="badge badge-outline capitalize">
                        {product.type}
                      </div>
                    </div>
                    <p>
                      <span className="font-medium">Brand Name: </span>
                      {product.brandName}
                    </p>
                    <p>
                      <span className="font-medium">Price: </span>$
                      {product.price}
                    </p>
                  </div>

                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>

              <button
                className="btn flex-1 hover:bg-red-600 group"
                onClick={() => handleDeleteProduct(product._id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

MobileView.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handleDeleteProduct: PropTypes.func.isRequired,
};

export default MobileView;
