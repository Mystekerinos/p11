import React from "react";
import "./Tags.scss";

const Tags = ({ getTag }) => {
  return (
    <div className="tag">
      <div className="tag__text">{getTag}</div>
    </div>
  );
};

export default Tags;
