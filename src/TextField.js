import React from "react";
export default function InputField(props) {
  return (
    <div style={props.style}>
      <label>{props.label} </label>
      <input className="form-control" {...props} onChange={props.change} />
    </div>
  );
}
