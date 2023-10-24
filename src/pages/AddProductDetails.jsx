import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProductDetails = () => {
  const info = useParams();
  const name = info.name;

  const handleAddCarDetails = (e) => {
    e.preventDefault();
    const form = e.target;
    const body = form.body.value;
    const seg = form.seg.value;
    const py = form.py.value;
    const eng = form.eng.value;
    const pow = form.pow.value;
    const fuel = form.fuel.value;
    const fuelc = form.fuelc.value;
    const ps = form.ps.value;
    const d = form.d.value;
    const ts = form.ts.value;
    const gw = form.gw.value;

    const specs = {
      name,
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

    fetch(
      "https://b8-a10-brand-shop-server-side-8yni0jrx6-nhs-projects-704a9e8f.vercel.app/car-details",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(specs),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Added!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error("Error! Not Added", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        form.reset();
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto px-28 py-10 bg-[url('/public/add-bg.jpg')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
      <div className="w-2/3 mx-auto bg-[#f4f3f081] text-center my-16 p-10 space-y-6 rounded-lg backdrop-blur-sm">
        <h1 className="font-rac text-3xl">Add Car Specs</h1>

        <form
          className="space-y-6 text-left text-black font-semibold text-lg"
          onSubmit={handleAddCarDetails}
        >
          <div className="flex justify-center items-center gap-8 mb-6">
            <div className="w-full flex flex-col gap-6 ">
              <input
                type="text"
                id="in1"
                name="body"
                placeholder="Body"
                className="input w-full capitalize"
              />

              <input
                type="text"
                id="in1"
                name="seg"
                placeholder="Segment"
                className="input w-full capitalize"
              />
              <input
                type="text"
                id="in1"
                name="py"
                placeholder="Production year"
                className="input w-full capitalize"
              />
              <div>
                <h1>Engine Specs</h1>
                <div className="flex gap-4">
                  <input
                    type="text"
                    id="in1"
                    name="eng"
                    placeholder="Engine"
                    className="input w-full capitalize"
                  />
                  <input
                    type="text"
                    id="in1"
                    name="pow"
                    placeholder="Power"
                    className="input w-full capitalize"
                  />
                  <input
                    type="text"
                    id="in1"
                    name="fuel"
                    placeholder="Fuel"
                    className="input w-full capitalize"
                  />
                  <input
                    type="text"
                    id="in1"
                    name="fuelc"
                    placeholder="Fuel Capacity"
                    className="input w-full capitalize"
                  />
                </div>
              </div>

              <div>
                <h1>Performance Specs</h1>
                <input
                  type="text"
                  id="in1"
                  name="ps"
                  placeholder="Top Speed"
                  className="input w-full capitalize"
                />
              </div>

              <div>
                <h1>Dimensions</h1>
                <input
                  type="text"
                  id="in1"
                  name="d"
                  placeholder="Dimension"
                  className="input w-full capitalize"
                />
              </div>

              <div>
                <h1>Tire Specs</h1>
                <input
                  type="text"
                  id="in1"
                  name="ts"
                  placeholder="Tire Size"
                  className="input w-full capitalize"
                />
              </div>

              <div>
                <h1>Weight Specs</h1>
                <input
                  type="text"
                  id="in1"
                  name="gw"
                  placeholder="Gross Weight"
                  className="input w-full capitalize"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <input type="submit" value="Add" className="input mx-auto" />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProductDetails;
