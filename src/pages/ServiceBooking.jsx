// import SharedBanner from "../shared/SharedBanner";
import { useParams } from "react-router-dom";

import UseCurrentDate from "../hooks/UseCurrentDate";
import useCurrentTime from "../hooks/useCurrentTime";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";
import usePerformMutation from "../hooks/usePerformMutation";
import { saveServiceBooking } from "../api/serviceAPIs";
import Container from "../components/shared/Container";

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
  };

  return (
    <Container>
      <div className="w-1/2 bg-[#f4f3f081] text-center space-y-6 p-10 rounded-lg">
        <form
          className=" space-y-6 text-left border"
          onSubmit={handlePlaceOrder}
        >
          <div className="flex justify-center items-center gap-8 mb-6">
            <div className="w-1/2 flex flex-col gap-6 ">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                defaultValue={user?.displayName.split(" ")[0]}
                required
                className="input w-full"
              />
              <input
                type="text"
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
                name="cell"
                placeholder="Your Phone"
                step="0.01"
                required
                className="input w-full"
              />
              <input
                type="email"
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
            className="input w-1/2 bg-red-600 text-white"
          />
        </form>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default ServiceBooking;
