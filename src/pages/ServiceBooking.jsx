// import SharedBanner from "../shared/SharedBanner";
import { useParams } from "react-router-dom";

import UseCurrentDate from "../hooks/UseCurrentDate";
import useCurrentTime from "../hooks/useCurrentTime";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";
import usePerformMutation from "../hooks/usePerformMutation";
import { saveServiceBooking } from "../api/serviceAPIs";

const ServiceBooking = () => {
  const mainTitle = "Check Out";
  const subTitle = "Home/Checkout";
  const title = { mainTitle, subTitle };

  const loadedServiceId = useParams();

  const { user } = useAuth();

  const date = UseCurrentDate();
  const time = useCurrentTime();

  const mutation = usePerformMutation("saveServiceBooking", saveServiceBooking);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const cell = form.cell.value;
    const note = form.note.value;

    const order = {
      firstName,
      lastName,
      email,
      cell,
      note,
      date,
      time,
      serviceId: loadedServiceId.id,
    };

    mutation.mutate(order);
    form.reset();

    //   axios.post("http://localhost:5000/orders", order).then((res) => {
    //     if (res.data.insertedId) {
    //       toast.success("🦄 inserted!", {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "dark",
    //       });
    //     } else {
    //       toast.error("🦄 something went wrong!", {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "dark",
    //       });
    //     }
    //   });
  };

  return (
    <div>
      {/* <SharedBanner title={title}></SharedBanner> */}

      <div className=" bg-[#F3F3F3] text-center space-y-6 p-10 rounded-lg my-20">
        <form className="space-y-6 text-left" onSubmit={handlePlaceOrder}>
          <div className="flex justify-center items-center gap-8 mb-6">
            <div className="w-1/2 flex flex-col gap-6 ">
              <input
                type="text"
                id="in1"
                name="firstName"
                placeholder="First Name"
                defaultValue={user?.displayName.split(" ")[0]}
                required
                className="input w-full"
              />
              <input
                type="text"
                id="in2"
                name="lastName"
                placeholder="Last Name"
                defaultValue={user?.displayName.split(" ")[1]}
                required
                className="input w-full"
              />
            </div>

            <div className="w-1/2 flex flex-col gap-6">
              <input
                type="number"
                id="in3"
                name="cell"
                placeholder="Your Phone"
                step="0.01"
                required
                className="input w-full"
              />
              <input
                type="email"
                id="in4"
                name="email"
                placeholder="Your Email"
                defaultValue={user?.email}
                readOnly
                required
                className="input w-full"
              />
            </div>
          </div>

          <textarea
            type="text"
            id="in5"
            name="note"
            placeholder="Special Note"
            className="input w-full h-[150px]"
          />

          <input
            type="submit"
            value="Order Confirm"
            className="input w-full bg-[#FF3811] text-white"
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ServiceBooking;
