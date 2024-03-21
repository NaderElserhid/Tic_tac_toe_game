import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const inatialGameBorad = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivPlayer] = useState("X");

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...inatialGameBorad.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquerSymbol =
      gameBoard[combinations[0].row][combinations[0].column];
    const secondSquerSymbol =
      gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquerSymbol =
      gameBoard[combinations[2].row][combinations[2].column];
    if (
      firstSquerSymbol &&
      firstSquerSymbol === secondSquerSymbol &&
      firstSquerSymbol === thirdSquerSymbol
    ) {
      winner = players[firstSquerSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function hadlSelect(rowIndex, colIndex) {
    //   setActivPlayer((curActivPlayer) => (curActivPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn);
      const upDatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return upDatedTurn;
    });
  }

  function handlRestart() {
    setGameTurns([]);
  }

  function hadelPlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
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
            onChangName={hadelPlayerNameChange}
          />
          <Player
            inatialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangName={hadelPlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handlRestart} />
        )}
        <GameBoard onSelectSquer={hadlSelect} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
