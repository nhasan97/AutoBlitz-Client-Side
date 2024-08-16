import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import usePerformMutation from "../../hooks/usePerformMutation";
import { saveServiceBooking } from "../../api/serviceAPIs";
import Container from "../../components/shared/Container";
import useGetServicesFromList from "../../hooks/useGetServicesFromList";
import { useEffect, useState } from "react";
import useUserRole from "../../hooks/useUserRole";
import Loading from "../../components/shared/Loading";
import { Helmet } from "react-helmet-async";

const ServiceBooking = () => {
  const [user, loading] = useUserRole();

  const [loadingServiceList, serviceList, , totalPrice] =
    useGetServicesFromList(user?.email);

  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(totalPrice);
  }, [totalPrice]);

  const mutation = usePerformMutation("saveServiceBooking", saveServiceBooking);

  const handlePlaceBooking = (e) => {
    e.preventDefault();

    const form = e.target;

    const booking = {
      bookingId: "AB-" + Math.floor(Math.random() * 10000000 + 1),
      name: form.name.value,
      email: form.email.value,
      cell: form.cell.value,
      note: form.note.value,
      time: form.time.value,
      items: serviceList,
      price: price,
      status: "Pending",
    };

    let listServiceIds = [];

    serviceList.map((item) => listServiceIds.push(item._id));

    mutation.mutate({ booking, listServiceIds });
  };

  if (loading || loadingServiceList) {
    return <Loading></Loading>;
  } else {
    return (
      <div className="bg-[url('/public/add-bg2.jpg')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay">
        <Container>
          <Helmet>
            <title>AutoBlitz | Checkout</title>
          </Helmet>

          <div className="w-full lg:w-[60%] h-[calc(100vh-160px)] mx-auto bg-[#f4f3f081] text-center p-5 lg:p-6 space-y-3 sm:space-y-6 rounded-lg backdrop-blur-sm">
            <h1 className="font-rac text-3xl text-white">Book Service</h1>

            <form onSubmit={handlePlaceBooking}>
              <div className="flex flex-col justify-center items-center gap-3 sm:gap-6 mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  defaultValue={user?.displayName}
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

                <input
                  type="number"
                  name="cell"
                  placeholder="Your Phone"
                  step="0.01"
                  required
                  className="input w-full"
                />

                <select
                  name="time"
                  placeholder="Select Time Schedule"
                  className="input w-full capitalize"
                  required
                >
                  <option>09am-10am</option>
                  <option>10am-11am</option>
                  <option>11am-12pm</option>
                  <option>12pm-01pm</option>
                  <option>01pm-02pm</option>
                  <option>02pm-04pm</option>
                  <option>03pm-04pm</option>
                  <option>04pm-05pm</option>
                </select>

                <textarea
                  type="text"
                  id="in5"
                  name="note"
                  placeholder="Special Note"
                  className="input w-full"
                />

                <input
                  type="submit"
                  value="Confirm Booking"
                  className="input w-1/2 bg-red-600 text-white text-lg"
                />
              </div>
            </form>
          </div>
          <ToastContainer />
        </Container>
      </div>
    );
  }
};

export default ServiceBooking;
