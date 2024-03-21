export default function GameBoard({ onSelectSquer, board }) {
  // const [gameBoard, setGameBoard] = useState(inatialGameBorad);
  // function handlSlectSquer(rowIndex, colIndex) {
  //   setGameBoard((prevGameboard) => {
  //     const updateBored = [
  //       ...prevGameboard.map((innerArray) => [...innerArray]),
  //     ];
  //     updateBored[rowIndex][colIndex] = activePlayerSymbol;
  //     return updateBored;
  //   });
  //   onSelectSquer();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSmpol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquer(rowIndex, colIndex)}
                  disabled={playerSmpol !== null}
                >
                  {playerSmpol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
