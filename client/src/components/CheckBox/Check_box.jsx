import "./checkbox.css";
const Check_box = ({ category }) => {
  return (
    <div className="checkBoxContainer">
      <label className="toggler-wrapper style-6">
        <input type="checkbox" />
        <div className="toggler-slider">
          <div className="toggler-knob"></div>
        </div>
      </label>

      <div className="badge">{category.attributes.title}</div>
    </div>
  );
};

export default Check_box;
