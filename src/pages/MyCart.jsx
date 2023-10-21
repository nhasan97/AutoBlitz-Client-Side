import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const loadedCartProducts = useLoaderData();
  const [cartProducts, setCartProducts] = useState(loadedCartProducts);
  console.log(cartProducts);

  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:5000/cart/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount === 1) {
          alert("Successfully deleted one document.");
        } else {
          alert("No documents matched the query. Deleted 0 documents.");
        }
        const remainingProducts = cartProducts.filter(
          (product) => product._id !== id
        );
        setCartProducts(remainingProducts);
      });
  };

  if (loadedCartProducts.length === 0) {
    return (
      <div className="max-w-screen-xl mx-auto h-screen flex justify-center items-center">
        <h1 className="font-rac text-7xl font-bold">Sorry no autos found</h1>
      </div>
    );
  } else {
    return (
      <div className="max-w-screen-xl mx-auto px-28 py-10 bg-[url('/public/cart-bg.webp')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
        <div className="h-[400px] mx-auto bg-[#f4f3f081] text-center my-16 p-10 space-y-6 rounded-lg backdrop-blur-sm overflow-y-auto">
          <h1 className="font-rac text-3xl text-white">Cart Items</h1>
          <table className="table text-black text-base ">
            {/* head */}
            <thead className="text-black text-base">
              <tr>
                <th>ID</th>
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
              {cartProducts.map((product) => (
                <tr key={product._id}>
                  <td>{product.carId}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={product.imageUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      {/* <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div> */}
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
                  <th>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => handleDeleteProduct(product._id)}
                    >
                      X
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default MyCart;
