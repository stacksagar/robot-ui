import React from "react";

const Brand = React.forwardRef((props, ref) => {
  if (props.brand === "Mobile" || props.brand === "mobile") {
    throw new Error("Mobile is not a brand!");
  }

  return (
    <div ref={ref}>
      <h4> {props.brand}</h4>
      <input type="search" />
      <p>I am paragraph</p>
    </div>
  );
});

export default Brand;
