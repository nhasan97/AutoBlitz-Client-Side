import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const loadedCar = useLoaderData();

  // console.log(loadedCar);

  const handleUpdateCar = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const brandName = form.brand_name.value.toLowerCase();
    const type = form.type.value;
    const price = parseFloat(form.price.value);
    const description = form.description.value;
    const rating = parseFloat(form.rating.value);
    const imageUrl = form.photo_url.value;

    const updatedCarInfo = {
      name,
      brandName,
      type,
      price,
      description,
      rating,
      imageUrl,
    };

    fetch(`http://localhost:5000/all-cars/${loadedCar._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedCarInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount === 1) {
          alert("modified");
        } else {
          alert("not modified");
        }
        form.reset();
      });
  };
  return (
    <div className="max-w-screen-xl mx-auto px-28 py-10 bg-[url('/public/update-bg.jpg')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
      <div className="w-2/3 mx-auto bg-[#f4f3f081] text-center my-16 p-10 space-y-6 rounded-lg backdrop-blur-sm">
        <h1 className="font-rac text-3xl">Update Car Info</h1>

        <form
          className="space-y-6 text-left text-black font-semibold text-lg"
          onSubmit={handleUpdateCar}
        >
          <div className="flex justify-center items-center gap-8 mb-6">
            <div className="w-1/2 flex flex-col gap-6 ">
              <label htmlFor="in1">
                Name
                <input
                  type="text"
                  id="in1"
                  name="name"
                  placeholder="Type here"
                  defaultValue={loadedCar.name}
                  className="input w-full capitalize"
                />
              </label>
              <label htmlFor="in2">
                Brand Name
                <input
                  type="text"
                  id="in2"
                  name="brand_name"
                  placeholder="Type here"
                  defaultValue={loadedCar.brandName}
                  className="input w-full capitalize"
                />
              </label>
              <label htmlFor="in3">
                Type
                <input
                  type="text"
                  id="in3"
                  name="type"
                  placeholder="Type here"
                  defaultValue={loadedCar.type}
                  className="input w-full capitalize"
                />
              </label>
            </div>

            <div className="w-1/2 flex flex-col gap-6">
              <label htmlFor="in4">
                Price
                <input
                  type="number"
                  id="in4"
                  name="price"
                  placeholder="Type here"
                  step="0.01"
                  defaultValue={loadedCar.price}
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
                  defaultValue={loadedCar.description}
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
                  defaultValue={loadedCar.rating}
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
              defaultValue={loadedCar.imageUrl}
              className="input w-full"
            />
          </label>

          <input type="submit" value="Update" className="input w-full" />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
