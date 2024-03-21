import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivPlayer] = useState("X");

  function hadlSelect(rowIndex, colIndex) {
    setActivPlayer((curActivPlayer) => (curActivPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurn) => {
      let currentPlayer = "X";

      if (prevTurn.length > 0 && prevTurn[0].player === "x") {
        currentPlayer = "O";
      }
      const upDatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return upDatedTurn;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            inatialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            inatialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquer={hadlSelect}
          turns = {gameTurns}
        />
      </div>
      <Log />
    </main>
  );
}

export default App;
