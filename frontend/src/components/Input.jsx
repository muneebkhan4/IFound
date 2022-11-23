import React, { Component } from "react";

function Input({
  label,
  name,
  placeholder,
  type,
  value,
  handleChange,
  autofocus,
}) {
  return (
    <div className="form-floating mb-3">
      <input
        autoFocus={autofocus}
        placeholder={placeholder}
        value={value}
        name={name}
        type={type}
        id={label}
        className="form-control"
        onChange={handleChange}
        min="1"
        max="150"
        style={{ width: "15rem" }}
      />
      <label htmlFor={label}>{name}</label>
    </div>
  );
}

export default Input;
