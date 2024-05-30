import PropTypes from "prop-types";
import timeStampToDateConverter from "../../../utilities/timeStampToDateConverter";

const TabPCView = ({ customers, search }) => {
  return (
    <div className="hidden sm:block w-full h-[80%] p-5 space-y-6 text-center bg-[#f4f3f081] backdrop-blur-sm rounded-lg">
      <h1 className="font-rac text-3xl text-white">Customers</h1>

      <div className="h-[calc(100%-76px)] overflow-y-auto rounded-lg ">
        <table className="w-full table rounded-lg text-base text-left">
          {/* head */}
          <thead className="text-base text-black font-normal text-left">
            <tr>
              {/* <th>ID</th> */}
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {customers
              .filter((car) => {
                return search.toLowerCase() === ""
                  ? car
                  : car.name.toLowerCase().includes(search);
              })
              .map((customer) => (
                <tr key={customer._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={customer.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{customer.name}</td>

                  <td className="capitalize">{customer.email}</td>

                  <td className="capitalize">
                    {timeStampToDateConverter(customer.timeStamp)}
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
  customers: PropTypes.array.isRequired,
  search: PropTypes.string,
};

export default TabPCView;
