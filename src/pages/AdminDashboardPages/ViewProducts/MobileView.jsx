import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";
import StarRating from "../../../components/StarRating";

const MobileView = ({ brandBasedCars, handleDeleteCar }) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:hidden w-full h-[80%] overflow-y-auto rounded-lg">
      {brandBasedCars.map((car) => (
        <div key={car._id} className="card bg-base-100 shadow-xl">
          <div className="card-body p-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={car.imageUrl} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>

              <h2 className="card-title text-[#71357B] text-lg md:text-xl lg:text-2xl">
                {car.name}
              </h2>
            </div>

            <div className="card-actions justify-between">
              <button
                className="btn btn-circle hover:bg-[#71357B] group"
                onClick={() =>
                  document.getElementById("m" + car._id).showModal()
                }
              >
                <i className="fa-solid fa-circle-info group-hover:text-white"></i>
              </button>
              <dialog id={"m" + car._id} className="modal">
                <div className="modal-box text-left space-y-3">
                  <img src={car.imageUrl} className="rounded-lg"></img>
                  <h3 className="font-bold text-lg">{car.name}</h3>
                  <p className="py-4 badge mr-3">{car.brandName}</p>
                  <p className="py-4 badge">{car.type}</p>
                  <StarRating rating={car.rating}></StarRating>
                  <p className="py-4">{car.description}</p>
                  <p className="py-4">Price: ${car.price}</p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>

              <Link
                className="btn btn-square text-lg hover:text-green-500"
                to={`/dashboard/update/${car._id}`}
              >
                <AiTwotoneEdit></AiTwotoneEdit>
              </Link>

              <button
                className="btn btn-square hover:text-red-500"
                onClick={() => {
                  handleDeleteCar(car._id, car.name);
                }}
              >
                <i className="fa-solid fa-trash group-hover:text-white "></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

MobileView.propTypes = {
  brandBasedCars: PropTypes.array.isRequired,
  handleDeleteCar: PropTypes.func.isRequired,
};

export default MobileView;
