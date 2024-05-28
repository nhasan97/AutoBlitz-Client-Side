import { useQuery } from "@tanstack/react-query";
import { getCustomers } from "../../api/customerAPIs";
import Loading from "../../components/shared/Loading";
import NoData from "../../components/shared/NoData";

const ViewCustomers = () => {
  //fetching brands data
  const { isLoading: loadingCustomers, data: customers } = useQuery({
    queryKey: ["getCustomers"],
    queryFn: getCustomers,
  });

  if (loadingCustomers) {
    return <Loading />;
  }

  if (customers.length > 0) {
    return (
      <div className="max-w-screen-xl mx-auto px-28 py-10 bg-[url('/public/cart-bg.webp')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
        <div className="h-[400px] mx-auto bg-[#f4f3f081] text-center my-16 p-10 space-y-6 rounded-lg backdrop-blur-sm overflow-y-auto">
          <h1 className="font-rac text-3xl text-white">Customers</h1>
          <table className="table text-black text-base ">
            {/* head */}
            <thead className="text-black text-base">
              <tr>
                {/* <th>ID</th> */}
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {customers.map((customer) => (
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return <NoData text="No Customer Found"></NoData>;
  }
};

export default ViewCustomers;
