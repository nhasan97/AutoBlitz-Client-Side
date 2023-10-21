import { Link } from "react-router-dom";

const AddProduct = () => {
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

    const newCar = {
      name,
      brandName,
      type,
      price,
      description,
      rating,
      imageUrl,
    };

    fetch("http://localhost:5000/cars", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newCar),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("inserted");
        } else {
          alert("not inserted");
        }
        form.reset();
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-28 py-10 bg-[url('/public/add-bg.jpg')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
      <div className="w-2/3 mx-auto bg-[#f4f3f081] text-center my-16 p-10 space-y-6 rounded-lg backdrop-blur-sm">
        <h1 className="font-rac text-3xl">Add New Car</h1>
        <form
          className="space-y-6 text-left text-black font-semibold text-lg"
          onSubmit={handleAddCar}
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
                  className="input w-full  capitalize"
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

        <Link
          className="btn"
          to={`/add-product-details
          }`}
        >
          Add More Info
        </Link>
      </div>
    </div>
  );
};

export default AddProduct;
