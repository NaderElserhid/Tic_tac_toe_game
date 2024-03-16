import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
  const [activePlayer, setActivPlayer] = useState("X");

  function hadlSelect() {
    setActivPlayer((curActivPlayer) => (curActivPlayer === "X" ? "O" : "X"));
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
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
