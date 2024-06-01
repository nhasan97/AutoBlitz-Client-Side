import PropTypes from "prop-types";

const Specs = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-6">
      <input
        type="text"
        name="eng"
        placeholder="Engine"
        className="input w-full capitalize"
        value={formData.eng}
        onChange={(e) => {
          setFormData({ ...formData, eng: e.target.value });
        }}
      />

      <div className="flex gap-3 sm:gap-6">
        <input
          type="text"
          name="pow"
          placeholder="Power"
          className="input w-full capitalize"
          value={formData.pow}
          onChange={(e) => {
            setFormData({ ...formData, pow: e.target.value });
          }}
        />

        <input
          type="text"
          name="ps"
          placeholder="Top Speed"
          className="input w-full capitalize"
          value={formData.ps}
          onChange={(e) => {
            setFormData({ ...formData, ps: e.target.value });
          }}
        />
      </div>

      <div className="flex gap-3 sm:gap-6">
        <input
          type="text"
          name="fuel"
          placeholder="Fuel"
          className="input w-full capitalize"
          value={formData.fuel}
          onChange={(e) => {
            setFormData({ ...formData, fuel: e.target.value });
          }}
        />

        <input
          type="text"
          name="fuelc"
          placeholder="Fuel Capacity"
          className="input w-full capitalize"
          value={formData.fuelc}
          onChange={(e) => {
            setFormData({ ...formData, fuelc: e.target.value });
          }}
        />
      </div>

      <input
        type="text"
        name="ts"
        placeholder="Tire Size"
        className="input w-full capitalize"
        value={formData.ts}
        onChange={(e) => {
          setFormData({ ...formData, ts: e.target.value });
        }}
      />
    </div>
  );
};

Specs.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default Specs;
