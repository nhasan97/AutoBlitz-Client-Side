import PropTypes from "prop-types";

const BasicInfo = ({ brands, formData, setFormData }) => {
  return (
    <div className="">
      <div className="flex lg:flex-row justify-center items-center gap-3 sm:gap-6 mb-3">
        <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-6">
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input w-full capitalize"
            value={formData.name}
            required
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />

          <select
            name="brand_name"
            placeholder="Brand Name"
            className="input w-full capitalize"
            value={formData.brandName}
            required
            onChange={(e) => {
              setFormData({ ...formData, brandName: e.target.value });
            }}
          >
            {brands.map((brand) => (
              <option key={brand._id}>{brand.name}</option>
            ))}
          </select>

          <input
            type="text"
            name="type"
            placeholder="Car Type"
            className="input w-full  capitalize"
            value={formData.type}
            required
            onChange={(e) => {
              setFormData({ ...formData, type: e.target.value });
            }}
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-6">
          <input
            type="number"
            name="price"
            placeholder="Price"
            step="0.01"
            className="input w-full"
            value={formData.price}
            required
            onChange={(e) => {
              setFormData({ ...formData, price: e.target.value });
            }}
          />

          <textarea
            type="text"
            name="description"
            placeholder="Description"
            className="input w-full capitalize pt-2"
            value={formData.description}
            required
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
          />

          <input
            type="number"
            name="rating"
            placeholder="Rating"
            step="0.5"
            min="1"
            max="5"
            className="input w-full"
            value={formData.rating}
            required
            onChange={(e) => {
              setFormData({ ...formData, rating: e.target.value });
            }}
          />
        </div>
      </div>

      <div className="form-control">
        <label
          htmlFor="in7"
          className="input w-full bg-[#18293E] text-white text-left pt-2"
        >
          Choose Car Image
          <input
            type="file"
            id="in7"
            name="photo_url"
            style={{ visibility: "hidden" }}
            onChange={(e) => {
              setFormData({ ...formData, photo_url: e.target.files[0] });
            }}
          />
        </label>
      </div>
    </div>
  );
};

BasicInfo.propTypes = {
  brands: PropTypes.array.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default BasicInfo;
