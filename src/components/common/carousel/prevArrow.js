import React from "react";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#707070",borderRadius: "50%",color: "white" }}
      onClick={onClick}
    ></div>
  );
};

export default PrevArrow;