import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [carName, setCarName] = useState("");
  const loadedBrands = useLoaderData();
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    setBrands(loadedBrands);
  }, []);

  const handleAddCar = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const brandName = form.brand_name.value.toLowerCase();
    const type = form.type.value;
    const price = parseFloat(form.price.value);
    const description = form.description.value;
    const rating = parseFloat(form.rating.value);
    const imageUrl = form.photo_url.value;
    setCarName(name);
    const newCar = {
      name,
      brandName,
      type,
      price,
      description,
      rating,
      imageUrl,
    };

    fetch(
      "https://b8-a10-brand-shop-server-side-8yni0jrx6-nhs-projects-704a9e8f.vercel.app/cars",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newCar),
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
    <div className="max-w-screen-xl mx-auto px-28 py-10 bg-[url('/public/add-bg2.jpg')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
      <div className="w-2/3 mx-auto bg-[#f4f3f081] text-center my-16 p-10 space-y-6 rounded-lg backdrop-blur-sm">
        <h1 className="font-rac text-3xl">Add New Car</h1>
        <form
          className="space-y-6 text-left text-black font-semibold text-lg"
          onSubmit={handleAddCar}
        >
          <div className="flex justify-center items-center gap-8 mb-3">
            <div className="w-1/2 flex flex-col gap-3 ">
              <label htmlFor="in1">
                Name
                <input
                  type="text"
                  id="in1"
                  name="name"
                  placeholder="Type here"
                  className="input w-full capitalize"
                />
              </label>
              <label htmlFor="in2">
                Brand Name
                <select
                  name="brand_name"
                  id=""
                  className="input w-full capitalize"
                >
                  {brands.map((brand) => (
                    <option key={brand._id}>{brand.name}</option>
                  ))}
                </select>
                {/* <input
                  type="text"
                  id="in2"
                  name="brand_name"
                  placeholder="Type here"
                  className="input w-full capitalize"
                /> */}
              </label>
              <label htmlFor="in3">
                Type
                <input
                  type="text"
                  id="in3"
                  name="type"
                  placeholder="Type here"
                  className="input w-full  capitalize"
                />
              </label>
            </div>

            <div className="w-1/2 flex flex-col gap-3">
              <label htmlFor="in4">
                Price
                <input
                  type="number"
                  id="in4"
                  name="price"
                  placeholder="Type here"
                  step="0.01"
                  className="input w-full"
                />
              </label>
              <label htmlFor="in5">
                Description
                <textarea
                  type="text"
                  id="in5"
                  name="description"
                  placeholder="Type here"
                  className="input w-full capitalize"
                />
              </label>
              <label htmlFor="in6">
                Rating
                <input
                  type="number"
                  id="in6"
                  name="rating"
                  placeholder="Type here"
                  step="0.5"
                  min="0"
                  max="5"
                  className="input w-full"
                />
              </label>
            </div>
          </div>

          <label htmlFor="in7">
            PhotoUrl
            <input
              type="text"
              id="in7"
              name="photo_url"
              placeholder="Type here"
              className="input w-full"
            />
          </label>

          <input type="submit" value="Add" className="input w-full" />
        </form>
        {carName ? (
          <Link className="btn" to={`/add-product-details/${carName}`}>
            Add Specs
          </Link>
        ) : (
          ""
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
