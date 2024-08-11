import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";
import StarRating from "../../../components/StarRating";

const TabPCView = ({ cars, handleDeleteCar, search, range, rating }) => {
  return (
    <div className="hidden sm:block w-full h-[80%] p-5 space-y-6 text-center bg-[#f4f3f081] backdrop-blur-sm rounded-lg">
      <h1 className="font-rac text-3xl text-white">Products</h1>

      <div className="h-[calc(100%-76px)] overflow-y-auto rounded-lg ">
        <table className="w-full table rounded-lg text-base text-left">
          {/* head */}
          <thead className="text-base text-black font-normal text-left">
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
            {cars
              .filter((car) => {
                return search.toLowerCase() === ""
                  ? car
                  : car.name.toLowerCase().includes(search.toLowerCase()) ||
                      car.brandName
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
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

                  <td className="text-black text-left">{car.name}</td>
                  <td className="text-black text-left">{car.brandName}</td>

                  <td>
                    <button
                      className="btn btn-circle hover:text-red-500"
                      onClick={() =>
                        document.getElementById(car._id).showModal()
                      }
                    >
                      <i className="fa-solid fa-circle-info"></i>
                    </button>

                    <dialog id={car._id} className="modal">
                      <div className="modal-box text-left">
                        <img src={car.imageUrl} className="rounded-lg"></img>
                        <div className="space-y-6">
                          <h3 className="text-2xl font-bold mt-6">
                            {car.name}
                          </h3>
                          <div className="flex gap-2">
                            <p className="badge">{car.type}</p>
                            <StarRating rating={car.rating}></StarRating>
                          </div>
                          <p className="text-xl font-semibold">
                            Price: ${car.price}
                          </p>
                          <div className="space-y-2">
                            <p className="mb-6 text-justify">
                              {car.description}
                            </p>
                            <p>
                              <span className="font-medium">Brand: </span>
                              {car.brandName}
                            </p>
                            <p>
                              <span className="font-medium">Body: </span>
                              {car.body}
                            </p>
                            <p>
                              <span className="font-medium">Segment: </span>
                              {car.seg}
                            </p>
                            <p>
                              <span className="font-medium">
                                Production Year:
                              </span>
                              {car.py}
                            </p>
                            <p>
                              <span className="font-medium">Engine: </span>
                              {car.eng}
                            </p>
                            <p>
                              <span className="font-medium">Power: </span>
                              {car.pow}
                            </p>
                            <p>
                              <span className="font-medium">Fuel: </span>
                              {car.fuel}
                            </p>
                            <p>
                              <span className="font-medium">
                                Fuel Capacity:
                              </span>
                              {car.fuelc}
                            </p>
                            <p>
                              <span className="font-medium">Top speed: </span>
                              {car.ps}
                            </p>
                            <p>
                              <span className="font-medium">Dimension: </span>
                              {car.d}
                            </p>
                            <p>
                              <span className="font-medium">Tire: </span>
                              {car.ts}
                            </p>
                            <p>
                              <span className="font-medium">
                                Gross Weight:{" "}
                              </span>
                              {car.gw}
                            </p>
                          </div>
                        </div>

                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </td>

                  <td className="text-black text-left">{car.type}</td>
                  <td className="text-black text-left">{car.price}</td>
                  <td className="text-black text-left">{car.rating}</td>

                  <td className="flex items-center gap-3">
                    <Link
                      className="btn btn-square text-lg hover:text-green-500"
                      to={`/dashboard/update/${car._id}`}
                    >
                      <AiTwotoneEdit></AiTwotoneEdit>
                    </Link>

                    <button
                      className="btn btn-square hover:text-red-600"
                      onClick={() => {
                        handleDeleteCar(car._id, car.name);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

TabPCView.propTypes = {
  cars: PropTypes.array.isRequired,
  handleDeleteCar: PropTypes.func.isRequired,
  search: PropTypes.string,
  range: PropTypes.array.isRequired,
  rating: PropTypes.array.isRequired,
};

export default TabPCView;
