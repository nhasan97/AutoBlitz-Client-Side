import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserRole from "../../../hooks/useUserRole";
import useGetItemsFromCart from "../../../hooks/useGetItemsFromCart";
import usePerformMutation from "../../../hooks/usePerformMutation";
import { deleteItemFromCart } from "../../../api/cartAPIs";
import Loading from "../../../components/shared/Loading";
import NoData from "../../../components/shared/NoData";
import Container from "../../../components/shared/Container";
import TabPCView from "./TabPCView";
import MobileView from "./MobileView";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyCart = () => {
  const [user, loading] = useUserRole();
  const [loadingCartItems, cartItems, refetchCartItems, totalPrice] =
    useGetItemsFromCart(user?.email);

  const mutation = usePerformMutation("deleteItemFromCart", deleteItemFromCart);

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22C45E",
      cancelButtonColor: "#DC2626",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate(id);
        refetchCartItems();
      }
    });
  };

  if (loading || loadingCartItems) {
    return <Loading></Loading>;
  }

  if (cartItems.length > 0) {
    // const totalPrice = cartItems.reduce((accumulator, currentItem) => {
    //   return accumulator + currentItem.price;
    // }, 0);

    return (
      <div className=" bg-[url('/public/prod-bg.jpg')] bg-[rgba(0,0,0,0.80)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
        <Container>
          <div className="w-full h-[calc(100vh-160px)] flex flex-col justify-center items-center gap-6">
            <Helmet>
              <title>AutoBlitz | My Cart</title>
            </Helmet>

            <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center gap-3 text-white text-lg">
              <p>Items : {cartItems.length}</p>
              <p>Total : ${totalPrice}</p>
              <Link to="/checkout">
                <button className="btn" disabled={!cartItems.length}>
                  Checkout
                </button>
              </Link>
            </div>

            <TabPCView
              cartItems={cartItems}
              handleDeleteProduct={handleDeleteProduct}
            ></TabPCView>

            <MobileView
              cartItems={cartItems}
              handleDeleteProduct={handleDeleteProduct}
            ></MobileView>

            <ToastContainer></ToastContainer>
          </div>
        </Container>
      </div>
    );
  } else {
    return <NoData text="No Items Found"></NoData>;
  }
};

export default MyCart;
