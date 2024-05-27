import SharedBanner from "../../components/SharedBanner";
import usePerformMutation from "../../hooks/usePerformMutation";
import { saveService } from "../../api/serviceAPIs";

const AddService = () => {
  const mainTitle = "Add New Service";
  const subTitle = "Home/Service";
  const title = { mainTitle, subTitle };

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
    <div>
      <SharedBanner title={title}></SharedBanner>

      <div className=" bg-[#F3F3F3] text-center space-y-6 p-10 rounded-lg my-20">
        <form className="space-y-6 text-left" onSubmit={handleAddService}>
          <div className="flex justify-center items-center gap-8 mb-6">
            <div className="w-1/2 flex flex-col gap-6 ">
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

            <div className="w-1/2 flex flex-col gap-6">
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
            className="input w-full bg-[#FF3811] text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
