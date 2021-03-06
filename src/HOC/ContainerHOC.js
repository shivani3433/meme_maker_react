import React from "react";
const containerHoc = (props) => (
  <div className={props.classtyle}>{props.children}</div>
);
export default containerHoc;
