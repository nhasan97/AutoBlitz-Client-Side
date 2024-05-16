import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserRole from "../../hooks/useUserRole";
import NoData from "../../components/NoData";
import Loading from "../../components/Loading";
import useGetItemsFromCart from "../../hooks/useGetItemsFromCart";
import usePerformMutation from "../../hooks/usePerformMutation";
import { deleteItemFromCart } from "../../api/cartAPIs";

const MyCart = () => {
  const [user, loading] = useUserRole();
  const [loadingCartItems, cartItems, refetchCartItems] = useGetItemsFromCart(
    user?.email
  );

  const mutation = usePerformMutation("deleteItemFromCart", deleteItemFromCart);

  const handleDeleteProduct = (id) => {
    mutation.mutate(id);
    refetchCartItems();
    // fetch(
    //   `https://b8-a10-brand-shop-server-side-8yni0jrx6-nhs-projects-704a9e8f.vercel.app/cart/${id}`,
    //   { method: "DELETE" }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.deletedCount === 1) {
    //       toast.success("Successfully deleted one document.", {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //       });
    //     } else {
    //       toast.error("No documents matched the query. Deleted 0 documents.", {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //       });
    //     }
    //     const remainingProducts = cartProducts.filter(
    //       (product) => product._id !== id
    //     );
    //     setCartProducts(remainingProducts);
    //   });
  };

  if (loading || loadingCartItems) {
    return <Loading></Loading>;
  }

  if (cartItems.length > 0) {
    return (
      <div className="max-w-screen-xl mx-auto px-28 py-10 bg-[url('/public/cart-bg.webp')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
        <div className="h-[400px] mx-auto bg-[#f4f3f081] text-center my-16 p-10 space-y-6 rounded-lg backdrop-blur-sm overflow-y-auto">
          <h1 className="font-rac text-3xl text-white">Cart Items</h1>
          <table className="table text-black text-base ">
            {/* head */}
            <thead className="text-black text-base">
              <tr>
                {/* <th>ID</th> */}
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
                <tr key={product._id}>
                  {/* <td>{product.carId}</td> */}
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
        <ToastContainer />
      </div>
    );
  } else {
    return <NoData text="No Items Found"></NoData>;
  }
};

export default MyCart;
