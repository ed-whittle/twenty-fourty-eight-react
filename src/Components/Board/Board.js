import React from "react";
import Cell from "../Cell/Cell";

const Board = () => {
  return (
    <>
    <div>
      <Cell value="blank" />
      <Cell value="two" />
      <Cell value="four" />
      <Cell value="eight" />
    </div>
    <div>
      <Cell value="sixteen" />
      <Cell value="thirtytwo" />
      <Cell value="sixtyfour" />
      <Cell value="onetwoeight" />
    </div>
    <div>
      <Cell value="twofivesix" />
      <Cell value="fivetwelve" />
      <Cell value="onezerotwofour" />
      <Cell value="twentyfourtyeight" />
    </div>
    <div>
      <Cell value="fourzeroninesix" />
      <Cell value="eightoneninetwo" />
      <Cell value="sixteenthreeeightfour" />
      <Cell value="thirtytwosevensixeight" />
    </div>            
    </>
  );
};

export default Board;
