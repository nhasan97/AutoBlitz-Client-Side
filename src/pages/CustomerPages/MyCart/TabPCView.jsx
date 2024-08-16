import PropTypes from "prop-types";

const TabPCView = ({ cartItems, handleDeleteProduct }) => {
  return (
    <div className="hidden sm:block w-full h-[80%] p-5 space-y-6 text-center bg-[#f4f3f081] backdrop-blur-sm rounded-lg">
      <h1 className="font-rac text-3xl text-white">Cart Items</h1>

      <div className="h-[calc(100%-76px)] overflow-y-auto rounded-lg ">
        <table className="w-full table rounded-lg text-base text-left">
          {/* head */}
          <thead>
            <tr className="text-lg text-black font-semibold text-center">
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Type</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cartItems.map((product) => (
              <tr key={product._id} className="text-black text-center">
                <td className="flex justify-center items-center">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={product.imageUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>

                <td className="capitalize">{product.name}</td>

                <td className="capitalize">{product.brandName}</td>

                <td>
                  <span className="badge badge-ghost badge-sm p-2 capitalize">
                    {product.type}
                  </span>
                </td>

                <td>${product.price}</td>

                <td>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

TabPCView.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handleDeleteProduct: PropTypes.func.isRequired,
};

export default TabPCView;
