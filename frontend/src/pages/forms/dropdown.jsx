import React from "react";

const Dropdown = ({ name, options, handleChange, opacity }) => {
  const MakeItem = function (X) {
    return <option key={X}>{X}</option>;
  };

  const myOpacity = parseFloat(opacity);
  return (
    <select
      className="form-control mb-3"
      style={{ width: "15rem", opacity: myOpacity }}
      onChange={handleChange}
      name={name}
    >
      {options.map(MakeItem)}
    </select>
  );
};

export default Dropdown;
