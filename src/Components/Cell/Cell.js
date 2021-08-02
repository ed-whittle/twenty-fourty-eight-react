import React from "react";
import "./Cell.scss";

const Cell = ({ value }) => {
  const getValueFromText = (value) => {
    switch (value) {
      case "blank":
        return ""
      case "two":
        return "2"
      case "four":
        return "4"
      default: 
        return "";
    }
  }

  return <div class={value}>{getValueFromText(value)}</div>;
};

export default Cell;
