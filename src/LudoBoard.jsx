import React from "react";
import { useState } from "react";

export default function LuduBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, red: 0, green: 0 });
  let [arr, setAarr] = useState(["no moves"]);

  let setinc = () => {
    // setMoves((preVal) => {
    //    return {...preVal, blue: preVal.blue + 1 }
    // })
    setAarr((prevArr) => {
      return [...prevArr, "blue moves"];
    });
    console.log(arr);
  };
  let setYellow = () => {
    setMoves((preVal) => {
      return { ...preVal, yellow: preVal.yellow + 1 };
    });
  };
  return (
    <div>
      <p>Game Begins!</p>
      <p>{arr}</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={setinc}>
          +1
        </button>
        <p>Yellow moves = {moves.yellow}</p>
        <button style={{ backgroundColor: "yellow" }} onClick={setYellow}>
          +1
        </button>
        <p>Red moves = {}</p>
        <button style={{ backgroundColor: "red" }}>+1</button>
        <p>Green moves = {}</p>
        <button style={{ backgroundColor: "green" }}>+1</button>
      </div>
    </div>
  );
}
 