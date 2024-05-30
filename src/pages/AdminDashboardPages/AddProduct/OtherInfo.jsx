import PropTypes from "prop-types";

const OtherInfo = ({ formData, setFormData }) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-6">
      <div className="h-full flex  gap-3 sm:gap-6">
        <input
          type="text"
          name="body"
          placeholder="Body"
          className="input w-full sm:w-1/2 capitalize"
          value={formData.body}
          onChange={(e) => {
            setFormData({ ...formData, body: e.target.value });
          }}
        />

        <input
          type="text"
          name="seg"
          placeholder="Segment"
          className="input w-full sm:w-1/2 capitalize"
          value={formData.seg}
          onChange={(e) => {
            setFormData({ ...formData, seg: e.target.value });
          }}
        />
      </div>

      <input
        type="text"
        name="py"
        placeholder="Production year"
        className="input w-full capitalize"
        value={formData.py}
        onChange={(e) => {
          setFormData({ ...formData, py: e.target.value });
        }}
      />

      <input
        type="text"
        name="d"
        placeholder="Dimension"
        className="input w-full capitalize"
        value={formData.d}
        onChange={(e) => {
          setFormData({ ...formData, d: e.target.value });
        }}
      />

      <input
        type="text"
        name="gw"
        placeholder="Gross Weight"
        className="input w-full capitalize"
        value={formData.gw}
        onChange={(e) => {
          setFormData({ ...formData, gw: e.target.value });
        }}
      />
    </div>
  );
};

OtherInfo.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default OtherInfo;
