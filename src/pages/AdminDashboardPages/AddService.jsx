import usePerformMutation from "../../hooks/usePerformMutation";
import { saveService } from "../../api/serviceAPIs";
import { ToastContainer } from "react-toastify";
import DashboardContainer from "../../components/dashboard/shared/DashboardContainer";

const AddService = () => {
  const mutation = usePerformMutation("saveService", saveService);

  const handleAddService = (e) => {
    e.preventDefault();

    const form = e.target;
    const serviceName = form.serviceName.value;
    const servicePhoto = form.photoUrl.value;
    const servicePrice = form.servicePrice.value;
    const serviceType = form.serviceType.value;
    const productDescription = form.productDescription.value;

    const service = {
      serviceName,
      servicePhoto,
      servicePrice,
      serviceType,
      productDescription,
    };

    mutation.mutate(service);
    form.reset();
  };
  return (
    <div className="h-screen bg-[url('/public/update-bg.jpg')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay">
      <DashboardContainer>
        {/* <Helmet>
        <title>PanaPoll | Dashboard | Manage Surveys</title>
      </Helmet> */}

        <div className="w-full lg:w-2/3 mx-auto bg-[#f4f3f081] text-center p-5 lg:p-10 space-y-3 sm:space-y-6 rounded-lg backdrop-blur-sm">
          <h1 className="font-rac text-3xl">Add New Service</h1>

          <form
            className="space-y-3 sm:space-y-6 text-left"
            onSubmit={handleAddService}
          >
            <div className="flex justify-center items-center gap-3 sm:gap-6 ">
              <div className="w-1/2 flex flex-col gap-3 sm:gap-6 ">
                <input
                  type="text"
                  id="in1"
                  name="serviceName"
                  placeholder="Service Name"
                  className="input w-full"
                />
                <input
                  type="text"
                  id="in2"
                  name="photoUrl"
                  placeholder="Photo Url"
                  className="input w-full"
                />
              </div>

              <div className="w-1/2 flex flex-col gap-3 sm:gap-6">
                <input
                  type="number"
                  id="in3"
                  name="servicePrice"
                  placeholder="Service Price"
                  step="0.01"
                  className="input w-full"
                />
                <input
                  type="text"
                  id="in4"
                  name="serviceType"
                  placeholder="Service Type"
                  className="input w-full"
                />
              </div>
            </div>

            <textarea
              type="text"
              id="in5"
              name="productDescription"
              placeholder="Product Description"
              className="input w-full h-[150px]"
            />

            <input
              type="submit"
              value="Add"
              className="input btn w-full bg-red-600 text-white"
            />
          </form>
        </div>
        <ToastContainer />
      </DashboardContainer>
    </div>
  );
};

export default AddService;
