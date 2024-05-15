import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";

const TabPCView = ({ brandBasedCars, handleDeleteCar }) => {
  return (
    <div className="hidden sm:block w-full h-[85%] overflow-y-auto rounded-lg border">
      <table className="w-full table table-zebra rounded-lg text-base text-left">
        {/* head */}
        <thead className=" bg-[#71357B] text-base text-white font-normal text-left">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Specs</th>
            <th>type</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row  */}
          {brandBasedCars.map((car) => (
            <tr key={car._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={car.imageUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>

              <td className="text-[#71357B] text-left">{car.name}</td>
              <td className="text-[#71357B] text-left">{car.brandName}</td>

              <td>
                <button
                  className="btn btn-circle hover:bg-[#71357B] group"
                  onClick={() => document.getElementById(car._id).showModal()}
                >
                  <i className="fa-solid fa-circle-info group-hover:text-white"></i>
                </button>

                <dialog id={car._id} className="modal">
                  <div className="modal-box text-left">
                    <h3 className="font-bold text-lg">{car.name}</h3>
                    <p className="py-4 badge">{car.type}</p>
                    <p className="py-4">{car.description}</p>

                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </td>

              <td className="text-[#71357B] text-left">{car.type}</td>
              <td className="text-[#71357B] text-left">{car.price}</td>
              <td className="text-[#71357B] text-left">{car.rating}</td>

              <td className="flex items-center gap-3">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TabPCView.propTypes = {
  brandBasedCars: PropTypes.array.isRequired,
  handleDeleteCar: PropTypes.func.isRequired,
};

export default TabPCView;
