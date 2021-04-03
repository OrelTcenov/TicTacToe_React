import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [boardSize, setBoardSize] = useState(3);
  const [board, setBoard] = useState([Array(3 * 3).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [start, setStart] = useState(true);
  const [xIsNext, setXisNext] = useState(true);
  const xO = xIsNext ? "X" : "O";

  const checkWinner = (squares) => {
    const arrayColumn = (arr, n) => arr.map((x) => x[n]); //Get column
    const allEqual = (arr) => arr.every((v) => v === arr[0]); //Check if all values of array are equals
    var temp = [],
      temp2 = [];
    var winLines = [];
    var index = boardSize - 1;
    var newArr = [];

    const copySquares = squares.slice();

    if (submit) {
      while (copySquares.length) {
        newArr.push(copySquares.splice(0, boardSize));
      }

      //Gets all the win scenarios
      for (var i = 0; i < boardSize; i++) {
        winLines.push(newArr[i]);
        winLines.push(arrayColumn(newArr, i));
        temp.push(newArr[i][i]);
        temp2.push(newArr[i][index--]);
      }
      winLines.push(temp);
      winLines.push(temp2);
      for (var j = 0; j < winLines.length; j++) {
        if (allEqual(winLines[j])) {
          if (winLines[j][0] != null) {
            return winLines[j][0];
          }
        } else if (stepNumber === boardSize * boardSize) {
          return "Draw";
        }
      }
    }
    return null;
  };
  const winner = checkWinner(board[stepNumber]);
  const handleClick = (i) => {
    const boardPlace = board.slice(0, stepNumber + 1);
    const current = boardPlace[stepNumber];
    const squares = [...current];

    if (winner && squares[i]) return;
    if (squares[i]) {
      alert("Already taken"); //Alert if square is taken
      return;
    }
    if (winner) return;

    // select square
    squares[i] = xO;
    setBoard([...boardPlace, squares]);
    setStepNumber(boardPlace.length);
    setXisNext(!xIsNext);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (boardSize <= 2 || boardSize > 20) {
      alert("Please choose a number greater than 2 and smaller than 20");
    } else {
      setBoard([Array(boardSize * boardSize).fill(null)]);
      setSubmit(true);
      setStart(false);
    }
  };

  const handleChange = (e) => {
    setBoardSize(e.target.value);
    setSubmit(false);
  };

  const restartGame = () => {
    window.location.reload();
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      {start ? (
        <>
          <form onSubmit={handleSubmit}>
            <label>
              Choose board size:
              <br />
              <input value={boardSize} onChange={handleChange} />
            </label>
            <input type="submit" value="Start Game" />
          </form>
          <br />
        </>
      ) : (
        <>
          <button onClick={restartGame}>Restart Game</button>
        </>
      )}

      {submit ? (
        <>
          <h3>
            {winner === "X" || winner === "O"
              ? "Winner: " + winner
              : winner === "Draw"
              ? winner
              : "Next Player: " + xO}
          </h3>
          <Board
            squares={board[stepNumber]}
            onClick={handleClick}
            numS={boardSize}
          ></Board>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Game;
