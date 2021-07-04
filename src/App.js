import "./styles.css";
import { useState } from "react";

// var userName = prompt("What's you name?");
var userName = "Bharati";
var color = "blue";

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function btnLikeClicked() {
    var newLikeCounter = likeCounter + 1;

    setLikeCounter(newLikeCounter);
  }

  return (
    <div className="App">
      <h1>
        Welcome
        <span style={{ color: color }}>{userName}</span>
      </h1>
      <h2>{likeCounter}</h2>
      <button onClick={btnLikeClicked}>Like</button>
    </div>
  );
}
