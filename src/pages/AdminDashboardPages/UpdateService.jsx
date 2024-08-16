import { useLoaderData } from "react-router-dom";
import DashboardContainer from "../../components/dashboard/shared/DashboardContainer";
import { ToastContainer } from "react-toastify";
import usePerformMutation from "../../hooks/usePerformMutation";
import { useState } from "react";
import { uploadImage } from "../../utilities/imageUploader";
import { updateService } from "../../api/serviceAPIs";
import { Helmet } from "react-helmet-async";
import { showToastOnError } from "../../utilities/displayToast";
import { FaAsterisk } from "react-icons/fa6";

const UpdateService = () => {
  const loadedService = useLoaderData();

  const [facilityInputField, setFacilityInputField] = useState(
    loadedService.data.facilities
  );

  const [changeServicePhoto, setChangeServicePhoto] = useState(false);

  const changeInput = (e, index) => {
    const values = [...facilityInputField];
    values[index][e.target.name] = e.target.value;
    setFacilityInputField(values);
  };

  const handleAddFields = () => {
    setFacilityInputField([
      ...facilityInputField,
      { facilityName: "", facilityDetails: "" },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...facilityInputField];
    values.splice(index, 1);
    setFacilityInputField(values);
  };

  const mutation = usePerformMutation("updateService", updateService);

  const handleUpdateService = async (e) => {
    e.preventDefault();

    const form = e.target;

    if (
      form.serviceName.value.length <= 0 ||
      form.servicePrice.value.length <= 0
    ) {
      showToastOnError("Please fill all the required fields");
    } else if (facilityInputField.length <= 0) {
      showToastOnError("Atleast one facility has to be added");
    } else {
      const id = loadedService.data._id;
      let servicePhoto = "";

      const serviceName = form.serviceName.value;
      if (changeServicePhoto) {
        const image = await uploadImage(form.photoUrl.files[0]);
        servicePhoto = image.data.display_url;
      } else {
        servicePhoto = loadedService.data.servicePhoto;
      }
      const servicePrice = parseFloat(form.servicePrice.value);
      const serviceDescription = form.serviceDescription.value;
      const facilities = facilityInputField;

      const updatedService = {
        serviceName,
        servicePhoto,
        servicePrice,
        serviceDescription,
        facilities,
      };

      mutation.mutate({ id, updatedService });
      form.reset();
    }
  };

  return (
    <div className="h-screen bg-[url('/public/update-bg.jpg')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay">
      <DashboardContainer>
        <Helmet>
          <title>AutoBlitz | Update Car Info</title>
        </Helmet>

        <div className="w-full lg:w-2/3 mx-auto bg-[#f4f3f081] text-center p-5 lg:p-10 space-y-3 sm:space-y-6 rounded-lg backdrop-blur-sm">
          <h1 className="font-rac text-3xl">Update Service</h1>

          <form
            className="space-y-3 sm:space-y-6 text-left"
            onSubmit={handleUpdateService}
          >
            <div className="flex justify-center items-center gap-3 sm:gap-6 ">
              <div className="w-full flex items-center relative">
                <input
                  type="text"
                  id="in1"
                  name="serviceName"
                  defaultValue={loadedService.data.serviceName}
                  placeholder="Service Name"
                  className="input w-full"
                />
                <FaAsterisk className="text-[10px] text-red-600 left-1 absolute" />
              </div>

              <div className="w-full flex items-center relative">
                <input
                  type="number"
                  id="in3"
                  name="servicePrice"
                  defaultValue={loadedService.data.servicePrice}
                  placeholder="Service Price"
                  step="0.01"
                  className="input w-full"
                />
                <FaAsterisk className="text-[10px] text-red-600 left-1 absolute" />
              </div>
            </div>

            <div className="form-control">
              <input
                type="text"
                name="type"
                className="input w-full"
                hidden
                readOnly
                value={changeServicePhoto}
              />

              <label
                htmlFor="in7"
                className="input w-full bg-[#18293E] text-white pt-2"
              >
                Choose Service Image
                <input
                  type="file"
                  id="in7"
                  name="photoUrl"
                  className="file-input file-input-bordered w-full border"
                  style={{ visibility: "hidden" }}
                  onChange={() => {
                    setChangeServicePhoto(!changeServicePhoto);
                  }}
                />
              </label>
            </div>

            <textarea
              type="text"
              id="in5"
              name="serviceDescription"
              defaultValue={loadedService.data.serviceDescription}
              placeholder="Service Description"
              className="input w-full"
            />

            <div className="max-h-[125px] space-y-3 overflow-y-auto">
              {facilityInputField.map((inputField, index) => (
                <div key={index} className="flex gap-2 sm:gap-6">
                  <input
                    type="text"
                    name="facilityName"
                    placeholder="Facility Name"
                    className="input w-full"
                    value={inputField.facilityName}
                    onChange={(e) => changeInput(e, index)}
                  />
                  <input
                    type="text"
                    name="facilityDetails"
                    placeholder="Facility Details"
                    className="input w-full"
                    value={inputField.facilityDetails}
                    onChange={(e) => changeInput(e, index)}
                  />

                  <i
                    className="fa-solid fa-circle-plus btn text-lg hover:text-green-500"
                    onClick={handleAddFields}
                  ></i>

                  <i
                    className="fa-solid fa-circle-minus btn text-lg hover:text-red-600"
                    onClick={() => handleRemoveFields(index)}
                    disabled={facilityInputField.length === 1}
                  ></i>
                </div>
              ))}
            </div>

            <input
              type="submit"
              value="Save"
              className="input btn w-full bg-red-600 text-white"
            />
          </form>
        </div>
        <ToastContainer />
      </DashboardContainer>
    </div>
  );
};

export default UpdateService;
