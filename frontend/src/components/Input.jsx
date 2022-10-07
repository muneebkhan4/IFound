import React, { Component } from "react";

const Input = ({
  label,
  name,
  placeholder,
  type,
  value,
  handleChange,
  autofocus,
}) => {
  return (
    <div className="form-group">
      <label className="m-2" htmlFor="email">
        {label}
      </label>
      <input
        autoFocus={autofocus}
        placeholder={placeholder}
        value={value}
        name={name}
        type={type}
        id={name}
        className="form-control m-2"
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
