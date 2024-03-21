export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Gmae Over!</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p>it's a drow!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
