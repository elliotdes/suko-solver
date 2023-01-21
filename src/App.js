import React, { useState } from "react";
import "./App.css";
import Grid from "./Components/Grid";
import Sum from "./Components/Sum";
import QuadSum from "./Components/QuadSum";
import { checkSums, getSolution } from "./Suko";

function App() {
  const [grid, setGrid] = useState([
    [8, 2, 4],
    [1, 6, 3],
    [9, 5, 7],
  ]);
  const [quad, setQuad] = useState([
    [17, 15],
    [21, 21],
  ]);
  const [colors, setColors] = useState([
    ["#FFA07A", "#87CEFA", "#87CEFA"],
    ["#FFA07A", "#87CEFA", "#7FFFAA"],
    ["#7FFFAA", "#7FFFAA", "#7FFFAA"],
  ]);
  const [greenSum, setGreenSum] = useState(24);
  const [blueSum, setBlueSum] = useState(12);
  const [orangeSum, setOrangeSum] = useState(9);
  const [selectedColor, setSelectedColor] = useState(null);

  const colorSum = {
    "#FFA07A": orangeSum,
    "#87CEFA": blueSum,
    "#7FFFAA": greenSum,
  };

  const handleChange = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value === "" ? "" : parseInt(value);
    setGrid(newGrid);
  };

  const handleQuadChange = (row, col, value) => {
    const newQuad = [...quad];
    newQuad[row][col] = value;
    setQuad(newQuad);
  };

  const handleSumChange = (color, newValue) => {
    if (color === "#FFA07A") {
      setOrangeSum(newValue);
    } else if (color === "#87CEFA") {
      setBlueSum(newValue);
    } else if (color === "#7FFFAA") {
      setGreenSum(newValue);
    }
  };

  const handleColorSumClick = (color) => {
    setSelectedColor(color);
  };

  const handleSquareClick = (row, col) => {
    if (selectedColor) {
      const newColors = [...colors];
      newColors[row][col] = selectedColor;
      setColors(newColors);
      setSelectedColor(null);
    }
  };

  const handleClick = () => {
    const check = checkSums(grid, colors, quad, colorSum);
    if (check) {
      alert("That is correct!");
    } else {
      alert("That is incorrect.");
    }
  };

  const handleSolve = () => {
    const solution = getSolution(colors, quad, colorSum);
    if (solution) {
      setGrid(solution);
    } else {
      alert("No solution found!");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Suko Solver</h1>
      </header>
      <div className="grid-container">
        <Grid
          grid={grid}
          colors={colors}
          onChange={handleChange}
          onClick={handleSquareClick}
        ></Grid>
        <QuadSum
          className="nw"
          onChange={handleQuadChange}
          quads={quad}
          coords={[0, 0]}
        />
        <QuadSum
          className="ne"
          onChange={handleQuadChange}
          quads={quad}
          coords={[1, 0]}
        />
        <QuadSum
          className="se"
          onChange={handleQuadChange}
          quads={quad}
          coords={[0, 1]}
        />
        <QuadSum
          className="sw"
          onChange={handleQuadChange}
          quads={quad}
          coords={[1, 1]}
        />
      </div>
      <div className="sum-container">
        <Sum
          color="#7FFFAA"
          initialValue={greenSum}
          onChange={handleSumChange}
          onClick={handleColorSumClick}
        />
        <Sum
          color="#87CEFA"
          initialValue={blueSum}
          onChange={handleSumChange}
          onClick={handleColorSumClick}
        />
        <Sum
          color="#FFA07A"
          initialValue={orangeSum}
          onChange={handleSumChange}
          onClick={handleColorSumClick}
        />
      </div>
      <div>
        <button onClick={handleClick}>Check</button>
        <button onClick={handleSolve}>Solve</button>
      </div>
    </div>
  );
}

export default App;
