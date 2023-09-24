import { useState } from 'react'
import './App.css'
import Board from "./componentes/tabuleiro.jsx"

// Componente principal do jogo
let App = function Game() {
  <Board/>
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <>
      <div className='title'>
        <h1>Jogo da Velha</h1>
      </div>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
          <hr/>
          <div className='reset'>
            <button onClick={resetGame}>Reiniciar Jogo</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
