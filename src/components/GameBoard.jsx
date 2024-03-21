const inatialGameBorad = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquer, turns }) {
  let gameBoard = inatialGameBorad;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
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
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSmpol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquer(rowIndex ,colIndex)}>{playerSmpol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
