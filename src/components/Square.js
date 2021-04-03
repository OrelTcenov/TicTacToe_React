import React from "react";

const Square = ({ value, boardSize, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;
  var signSize = 6.7 - 0.353 * boardSize + "rem";
  //f = 3.353 - 0.1176*boardSize
  /*if (boardSize >= 12) {
    signSize = "1rem";
  } else if (boardSize >= 7) {
    signSize = "3rem";
  } else {
    signSize = "5rem";
  }*/

  return (
    <button className={style} onClick={onClick} style={{ fontSize: signSize }}>
      {value}
    </button>
  );
};

export default Square;
