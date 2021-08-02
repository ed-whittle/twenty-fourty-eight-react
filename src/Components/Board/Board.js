import React, { useState } from "react";
import Cell from "../Cell/Cell";
import "./Board.scss";

import { upArrowPress, downArrowPress, leftArrowPress, rightArrowPress } from '../../utils/handleArrowButtonPress';

import KeyboardEventHandler from "react-keyboard-event-handler";

const Board = () => {
  const [currentValues, setCurrentValues] = useState(Array(16).fill("eight"));

  return (
    <div className="board">
      <KeyboardEventHandler
        handleKeys={['left', 'up', 'right', 'down']}
        onKeyEvent={(key, e) => {
          switch(key) {
            case 'up':
              upArrowPress();
              break;
            case 'down':
              downArrowPress();
              break;  
            case 'left':
              leftArrowPress();
              break;  
            case 'right':
              rightArrowPress();
              break;   
            default:
              break;                                       
          }
        }}
      />
      <div className="board-row">
        <Cell value={currentValues[0]} />
        <Cell value={currentValues[1]} />
        <Cell value={currentValues[2]} />
        <Cell value={currentValues[3]} />
      </div>
      <div className="board-row">
        <Cell value={currentValues[4]} />
        <Cell value={currentValues[5]} />
        <Cell value={currentValues[6]} />
        <Cell value={currentValues[7]} />
      </div>
      <div className="board-row">
        <Cell value={currentValues[8]} />
        <Cell value={currentValues[9]} />
        <Cell value={currentValues[10]} />
        <Cell value={currentValues[11]} />
      </div>
      <div className="board-row">
        <Cell value={currentValues[12]} />
        <Cell value={currentValues[13]} />
        <Cell value={currentValues[14]} />
        <Cell value={currentValues[15]} />
      </div>
    </div>
  );
};

export default Board;
