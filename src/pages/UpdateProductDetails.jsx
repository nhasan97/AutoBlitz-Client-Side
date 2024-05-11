import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useGetSingleCarDataAndSpecs from "../hooks/useGetSingleCarDataAndSpecs";
import Loading from "../components/Loading";
import usePerformMutation from "../hooks/usePerformMutation";
import { updateCarSpecs } from "../api/carsAPIs";

const UpdateProductDetails = () => {
  const loadedCarId = useParams();

  //fetching single car data and specs
  const [, , loadingCarSpecs, loadedSpecs] = useGetSingleCarDataAndSpecs(
    loadedCarId.id
  );

  const mutation = usePerformMutation("updateCarSpecs", updateCarSpecs);

  const handleUpdateCarDetails = (e) => {
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

    const name = loadedSpecs.name;

    const updatedSpecs = {
      name: name,
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

    mutation.mutate({ name, updatedSpecs });
    form.reset();
  };

  if (loadingCarSpecs) {
    return <Loading></Loading>;
  } else {
    return (
      <div className="max-w-screen-xl mx-auto px-28 py-10 bg-[url('/public/update-bg.jpg')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
        <div className="w-2/3 mx-auto bg-[#f4f3f081] text-center my-16 p-10 space-y-6 rounded-lg backdrop-blur-sm">
          <h1 className="font-rac text-3xl">Update Car Specs</h1>

          <form
            className="space-y-6 text-left text-black font-semibold text-lg"
            onSubmit={handleUpdateCarDetails}
          >
            <div className="flex justify-center items-center gap-8 mb-6">
              <div className="w-full flex flex-col gap-6 ">
                <input
                  type="text"
                  id="in1"
                  name="body"
                  placeholder="Body"
                  defaultValue={loadedSpecs.body}
                  className="input w-full capitalize"
                />

                <input
                  type="text"
                  id="in1"
                  name="seg"
                  placeholder="Segment"
                  defaultValue={loadedSpecs.seg}
                  className="input w-full capitalize"
                />
                <input
                  type="text"
                  id="in1"
                  name="py"
                  placeholder="Production year"
                  defaultValue={loadedSpecs.py}
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
                      defaultValue={loadedSpecs.eng}
                      className="input w-full capitalize"
                    />
                    <input
                      type="text"
                      id="in1"
                      name="pow"
                      placeholder="Power"
                      defaultValue={loadedSpecs.pow}
                      className="input w-full capitalize"
                    />
                    <input
                      type="text"
                      id="in1"
                      name="fuel"
                      placeholder="Fuel"
                      defaultValue={loadedSpecs.fuel}
                      className="input w-full capitalize"
                    />
                    <input
                      type="text"
                      id="in1"
                      name="fuelc"
                      placeholder="Fuel Capacity"
                      defaultValue={loadedSpecs.fuelc}
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
                    defaultValue={loadedSpecs.ps}
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
                    defaultValue={loadedSpecs.d}
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
                    defaultValue={loadedSpecs.ts}
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
                    defaultValue={loadedSpecs.gw}
                    className="input w-full capitalize"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <input type="submit" value="Update" className="input mx-auto" />
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    );
  }
};

export default UpdateProductDetails;
