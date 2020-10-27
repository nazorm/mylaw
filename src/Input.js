import React from "react";
import "./App.css";

const Input = (props) => {
  const displayInput = () => {
    if (props.type === "textarea") {
      return (
        <textarea
          placeholder={props.placeholder}
          rows={3}
          onChange={props.change}
          name={props.name}
        />
      );
    } else {
      return (
        <input
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.change}
          name={props.name}
        />
      );
    }
  };
  return (
    <div className={`item ${props.type == "checkbox" ? "item--checkbox" : ""}`}>
      <label htmlFor="">{props.label}</label>
      {displayInput()}
    </div>
  );
};

export default Input;
