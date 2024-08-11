import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { useEffect } from "react";
import { useState } from "react";
// import { updateUserRole } from "../api/usersAPIs";
import { useNavigate } from "react-router-dom";
import axiosSecure from "../../../api/axiosSecure";
import usePerformMutation from "../../../hooks/usePerformMutation";
import { showToastOnError } from "../../../utilities/displayToast";
import Loading from "../../../components/shared/Loading";
import useUserRole from "../../../hooks/useUserRole";
import useGetItemsFromCart from "../../../hooks/useGetItemsFromCart";
import { savePaymentData } from "../../../api/paymentAPIs";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionID, setTransactionID] = useState("");
  const [user, loading] = useUserRole();
  const navigate = useNavigate();

  //loading cart items
  const [loadingCartItems, cartItems, totalPrice] = useGetItemsFromCart(
    user?.email
  );

  const price = totalPrice;

  console.log(totalPrice);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: price })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, [price]);

  //performing mutation for saving payment data
  const mutation = usePerformMutation(
    "savePayment",
    savePaymentData,
    "Payment done successfully!"
  );

  //payment handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      showToastOnError("Please login first");
      navigate("/login");
    } else {
      if (!stripe || !elements) {
        return;
      }

      const card = elements.getElement(CardElement);

      if (card == null) {
        return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        console.log("Error:", error);
        setError(error.message);
      } else {
        console.log("Payment Method:", paymentMethod);
        setError("");
      }

      const { paymentIntent, error: paymentError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || "Not Found",
              email: user?.email || "Not Found",
            },
          },
        });

      if (paymentError) {
        setError(paymentError.message);
      } else {
        setError("");
        if (paymentIntent.status === "succeeded") {
          setTransactionID(paymentIntent.id);

          const payment = {
            orderId: "AB-" + Math.floor(Math.random() * 10000000 + 1),
            name: e.target.name.value || "Not Found",
            email: e.target.email.value || "Not Found",
            items: cartItems,
            price: price,
            address: e.target.address.value || "Not Found",
            cell: e.target.cell.value || "Not Found",
            transactionID: paymentIntent?.id,
            status: "Pending",
          };

          let cartCarIds = [];

          cartItems.map((item) => cartCarIds.push(item._id));

          mutation.mutate({ payment, cartCarIds });
          // navigate("/", { replace: true });
        }
      }
    }
  };

  if (loading || loadingCartItems) {
    return <Loading></Loading>;
  } else {
    return (
      <div className="w-full lg:w-2/3 mx-auto bg-[#f4f3f081] text-center p-5 lg:p-10 space-y-3 sm:space-y-6 rounded-lg backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="">
          <div className="flex flex-col justify-center items-center gap-3 sm:gap-6 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input w-full capitalize"
              value={user?.displayName}
              required
              readOnly
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input w-full"
              value={user?.email}
              required
              readOnly
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input w-full capitalize"
              required
            />

            <input
              type="text"
              name="cell"
              placeholder="Cell"
              className="input w-full"
              required
            />
          </div>

          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "black",
                  "::placeholder": {
                    color: "black",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            type="submit"
            disabled={!stripe || !clientSecret}
            className="btn mt-10 bg-red-600 text-lg font-medium text-white hover:text-red-600 normal-case rounded-lg"
          >
            Place Order
          </button>

          {error && <p className="text-red-600">{error}</p>}

          {transactionID && (
            <p className="text-green-600">
              Payment success!! Your transaction ID : {transactionID}
            </p>
          )}
        </form>
      </div>
    );
  }
};

export default CheckoutForm;
