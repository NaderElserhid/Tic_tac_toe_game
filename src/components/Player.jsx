import { useState } from "react";

export default function player({ inatialName, symbol, isActive }) {
  const [isEditing, setISEditing] = useState(false);
  const [playerName, setplayerName] = useState(inatialName);

  function handilCilick() {
    setISEditing((editing) => !editing);
  }
  function handilchange(event) {
    setplayerName(event.target.value);
  }

  let edibalePlayerName = <span className="player-name">{playerName}</span>;
  //   let buttonCaption = "Edit";
  if (isEditing) {
    edibalePlayerName = (
      <input type="text" required value={playerName} onChange={handilchange} />
    );
    // buttonCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {edibalePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handilCilick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
