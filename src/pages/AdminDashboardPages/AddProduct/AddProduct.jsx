import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../../components/shared/Loading";
import { saveCarData } from "../../../api/carsAPIs";
import { ToastContainer } from "react-toastify";
import { uploadImage } from "../../../utilities/imageUploader";
import DashboardContainer from "../../../components/dashboard/shared/DashboardContainer";
import useGetAllBrands from "../../../hooks/useGetAllBrands";
import usePerformMutation from "../../../hooks/usePerformMutation";
import BasicInfo from "./BasicInfo";
import OtherInfo from "./OtherInfo";
import Specs from "./Specs";

const AddProduct = () => {
  //fetching brands data
  const [loadingBrands, brands] = useGetAllBrands();

  const [pageNumber, setPageNumber] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    brandName: "",
    type: "",
    price: "",
    description: "",
    rating: "",
    photo_url: "",
    body: "",
    seg: "",
    py: "",
    eng: "",
    pow: "",
    fuel: "",
    fuelc: "",
    ps: "",
    d: "",
    ts: "",
    gw: "",
  });

  const FormTitles = ["Basic Info", "Other Info", "Specs"];

  const PageDisplay = () => {
    if (pageNumber === 0) {
      return (
        <BasicInfo
          brands={brands}
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (pageNumber === 1) {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <Specs formData={formData} setFormData={setFormData} />;
    }
  };

  //saving car data in db
  const mutation = usePerformMutation("saveCarData", saveCarData);

  const handleAddCar = async () => {
    const name = formData.name;
    const brandName = formData.brandName.toLowerCase();
    const type = formData.type;
    const price = parseFloat(formData.price);
    const description = formData.description;
    const rating = parseFloat(formData.rating);
    const image = await uploadImage(formData.photo_url);
    const imageUrl = image.data.display_url;
    const body = formData.body;
    const seg = formData.seg;
    const py = formData.py;
    const eng = formData.eng;
    const pow = formData.pow;
    const fuel = formData.fuel;
    const fuelc = formData.fuelc;
    const ps = formData.ps;
    const d = formData.d;
    const ts = formData.ts;
    const gw = formData.gw;

    // setCarName(name);
    const newCar = {
      name,
      brandName,
      type,
      price,
      description,
      rating,
      imageUrl,
      body,
      seg,
      py,
      eng,
      pow,
      fuel,
      fuelc,
      ps,
      d,
      ts,
      gw,
    };

    console.log(newCar);
    mutation.mutate(newCar);
    // form.reset();
  };

  if (loadingBrands) {
    return <Loading></Loading>;
  } else {
    return (
      <div className="h-screen bg-[url('/public/add-bg2.jpg')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay">
        <DashboardContainer>
          {/* <Helmet>
            <title>PanaPoll | Dashboard | Manage Surveys</title>
          </Helmet> */}

          <div className="w-full lg:w-2/3 mx-auto bg-[#f4f3f081] text-center p-5 lg:p-10 space-y-3 sm:space-y-6 rounded-lg backdrop-blur-sm">
            <h1 className="font-rac text-3xl">Add New Car</h1>

            <div className="w-full h-3 bg-base-200 rounded-xl border">
              <div
                className="h-full bg-[#18293E] rounded-xl"
                style={{
                  width:
                    pageNumber === 0
                      ? "33.3%"
                      : pageNumber == 1
                      ? "66.6%"
                      : "100%",
                }}
              ></div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-6">
              <div className="text-2xl font-medium">
                <h1>{FormTitles[pageNumber]}</h1>
              </div>

              <div className="body">{PageDisplay()}</div>

              <div className="w-full flex gap-3 sm:gap-6">
                <button
                  className="btn flex-1 bg-red-600 text-white"
                  disabled={pageNumber == 0}
                  onClick={() => {
                    setPageNumber((currPageNumber) => currPageNumber - 1);
                  }}
                >
                  Prev
                </button>
                <button
                  className="btn flex-1 bg-red-600 text-white"
                  onClick={() => {
                    if (pageNumber === FormTitles.length - 1) {
                      alert("FORM SUBMITTED");
                      handleAddCar();
                    } else {
                      setPageNumber((currPageNumber) => currPageNumber + 1);
                    }
                  }}
                >
                  {pageNumber === FormTitles.length - 1 ? "Submit" : "Next"}
                </button>
              </div>
            </div>
          </div>

          <ToastContainer />
        </DashboardContainer>
      </div>
    );
  }
};

export default AddProduct;
