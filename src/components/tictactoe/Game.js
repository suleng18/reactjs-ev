import React, { useState } from 'react';
import { calulateWinner } from '../../helpers';
import Board from './Board';
import './GameStyles.css';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calulateWinner(board);

  const handleClick = (index) => {
    console.log(index);
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    console.log('🚀 ~ boardCopy', boardCopy);
    setXIsNext((xIsNext) => !xIsNext);
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
  };

  return (
    <div>
      <Board cells={board} onClick={handleClick} />
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-rest" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
