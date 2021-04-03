import React from "react";

const Square = ({ value, boardSize, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;
  var signSize = 6.7 - 0.353 * boardSize + "rem";

  return (
    <button className={style} onClick={onClick} style={{ fontSize: signSize }}>
      {value}
    </button>
  );
};

export default Square;
