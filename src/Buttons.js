import React from "react";
export default function Button(props) {
  return (
    <div className="mt-3 text-center">
      <button className="btn btn-dark mr-5 test-commit" onClick={props.click}>
        {props.name}
      </button>
    </div>
  );
}
