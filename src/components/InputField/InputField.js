import "./InputField.css";
import React from "react";
const InputField = ({ label, placeholder, onChange, value, error, type }) => {
  return (
    <div className="inputfield_wrapper">
      <label>{label ? label : ""}</label>
      <input
        type={type ? type : "text"}
        id="email"
        placeholder={placeholder}
        value={value && value}
        onChange={onChange && onChange}
      />
      <p className="formContentError">
        {error && type === "email"
          ? "Please enter a valid email"
          : error
          ? "This field is required"
          : ""}
      </p>
    </div>
  );
};

export default InputField;
