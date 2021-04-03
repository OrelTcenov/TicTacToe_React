import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick, numS }) => {
  const gridTemplate =
    "repeat(" + `${numS}` + ", 1fr) / repeat(" + `${numS}` + ", 1fr)";
  return (
    <div
      className="board"
      style={{
        gridTemplate: gridTemplate,
      }}
    >
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          boardSize={numS}
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  );
};

export default Board;
