import React, { Component } from "react";

function Input({
  label,
  name,
  placeholder,
  type,
  value,
  handleChange,
  autofocus,
  ref,
}) {
  return (
    <div className="form-floating mb-3">
      <input
        className="form-control"
        autoFocus={autofocus}
        placeholder={placeholder}
        value={value}
        name={name}
        type={type}
        id={label}
        onChange={handleChange}
        min="1"
        max="150"
        style={{ width: "15rem" }}
        ref={ref}
      />
      <label htmlFor={label}>{name}</label>
    </div>
  );
}

export default Input;
