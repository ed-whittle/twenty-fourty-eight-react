import React from "react";
import "./Cell.scss";
import { getValueFromText } from "../../utils/getValueFromText";

const Cell = ({ value }) => {
  return <div class={value}>{getValueFromText(value)}</div>;
};

export default Cell;
