import React from "react";

const input = props => {
  return (
    <div>
      <input type="text" onChange={props.change} value={props.value} />
      <p>The input length: {props.value.length}</p>
    </div>
  );
};

export default input;
