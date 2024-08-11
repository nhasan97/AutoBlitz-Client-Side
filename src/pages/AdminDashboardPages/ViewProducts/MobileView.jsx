import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";
import StarRating from "../../../components/StarRating";

const MobileView = ({ cars, handleDeleteCar, search, range, rating }) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:hidden w-full h-[85%] overflow-y-auto rounded-lg">
      {cars
        .filter((car) => {
          return search.toLowerCase() === ""
            ? car
            : car.name.toLowerCase().includes(search.toLowerCase()) ||
                car.brandName.toLowerCase().includes(search.toLowerCase()) ||
                car.type.toLowerCase().includes(search.toLowerCase());
        })
        .filter((car) => {
          return range[0] === 0 && range[1] === 100
            ? car
            : car.price >= range[0] && car.price <= range[1];
        })
        .filter((car) => {
          return rating[0] === 0 && rating[1] === 100
            ? car
            : car.rating >= rating[0] && car.rating <= rating[1];
        })
        .map((car) => (
          <div key={car._id} className="h-fit card bg-[#f4f3f081] shadow-xl">
            <div className="card-body p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={car.imageUrl}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>

                <h2 className="card-title text-white text-xl md:text-2xl lg:text-2xl">
                  {car.name}
                </h2>
              </div>

              <div className="card-actions justify-between">
                <button
                  className="btn btn-circle hover:bg-red-600 group"
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
  cars: PropTypes.array.isRequired,
  handleDeleteCar: PropTypes.func.isRequired,
  search: PropTypes.string,
  range: PropTypes.array.isRequired,
  rating: PropTypes.array.isRequired,
};

export default MobileView;
