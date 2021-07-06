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

/* 

LIST IN REACT

var list = ["bread", "milk", "potato", "butter"];

export default function App() {
  function getBg(index) {
    if (index % 2 === 0) {
      return "white";
    }
    return "gray";
  }

  const [listItemValue, setListItemValue] = useState("");

  function onClickHandler(item) {
    setListItemValue(item);
  }

  return (
    <div className="App">
      <ul>
        <h1>Print My Shopping List</h1>
        {list.map((item, index) => {
          return (
            <li
              key={item}
              onClick={() => onClickHandler(item)}
              style={{ backgroundColor: getBg(index) }}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <h2>{listItemValue}</h2>
    </div>
  );
}

*/

/*

INPUT IN REACT

export default function App() {
  const [userInput, setUserInput] = useState("");

  function inputChangeHandler(e) {
    console.log(e.target);
    console.log(e.target.value);
    setUserInput(e.target.value);
  }

  return (
    <div className="App">
      <h1>Input in React</h1>
      <input onChange={inputChangeHandler}></input>
      <div>Welcome {userInput}</div>
    </div>
  );
}

*/
