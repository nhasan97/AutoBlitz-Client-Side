// import { Helmet } from "react-helmet-async";
// import Container from "../components/shared/Container";
// import Title from "../components/shared/Title";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  //setting the title
  // const title = {
  //   mainTitle: "Become a Pro User",
  //   subTitle: "You deserve more",
  // };

  const stripePromise = loadStripe(import.meta.env.VITE_Publishable_Key);

  return (
    // <Container>
    //   <Helmet>
    //     <title>PanaPoll | Become PRO</title>
    //   </Helmet>

    <div className="h-[calc(100vh-80px)] bg-[url('/public/add-bg2.jpg')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay flex flex-col justify-center items-center pt-16 pb-5 space-y-6">
      {/* <Title title={title}></Title> */}

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
    // </Container>
  );
};

export default Payment;
