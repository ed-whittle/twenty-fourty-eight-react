import React, { useEffect, useState } from "react";
import Cell from "../Cell/Cell";
import "./Board.scss";

import KeyboardEventHandler from "react-keyboard-event-handler";

import { handleArrowPress } from '../../utils/handleArrowButtonPress';
import { addValueToBoard } from '../../utils/addValueToBoard';
import { isGameOver } from '../../utils/checkGameOver';

const Board = () => {
  const [currentValues, setCurrentValues] = useState(addValueToBoard(Array(16).fill("blank")));

  useEffect(() => {
    const gameOverFlag = isGameOver(currentValues);
    console.log(`Game Over: ${gameOverFlag}`);
  }, [currentValues])

  return (
    <div className="board">
      <KeyboardEventHandler
        handleKeys={['left', 'up', 'right', 'down']}
        onKeyEvent={(key, e) => console.log(handleArrowPress(key, e, currentValues))}
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
