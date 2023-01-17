import React, { useState } from "react";
import "./App.css";
import Grid from "./Components/Grid";
import Sum from "./Components/Sum";
import QuadSum from "./Components/QuadSum";

function App() {
  const [grid, setGrid] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [quad, setQuad] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [colors, setColors] = useState([
    ["#FFA07A", "#87CEFA", "#7FFFAA"],
    ["#87CEFA", "#FFA07A", "#7FFFAA"],
    ["#7FFFAA", "#87CEFA", "#FFA07A"],
  ]);
  const [orangeSum, setOrangeSum] = useState(10);
  const [blueSum, setBlueSum] = useState(20);
  const [greenSum, setGreenSum] = useState(30);
  const [selectedColor, setSelectedColor] = useState(null);

  const colorSum = {
    "#FFA07A": orangeSum,
    "#87CEFA": blueSum,
    "#7FFFAA": greenSum,
  };

  const checkSum = (grid, color, desiredSum) => {
    let sum = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (colors[i][j] === color) {
          sum += Number(grid[i][j]);
        }
      }
    }
    if (sum > desiredSum) {
      console.log(`The sum of the ${color} group exceeds the desired sum`);
    }
  };

  const handleChange = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
    const color = colors[row][col];
    checkSum(newGrid, color, colorSum[color]);
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
    checkSum(grid, color, newValue);
  };

  const handleColorSumClick = (color) => {
    setSelectedColor(color);
  };

  const handleSquareClick = (row, col) => {
    if (selectedColor) {
      const newColors = [...colors];
      newColors[row][col] = selectedColor;
      setColors(newColors);
      checkSum(grid, selectedColor, colorSum[selectedColor]);
      setSelectedColor(null);
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
      </div>
      <div className="sum-container">
        <Sum
          color="#FFA07A"
          initialValue={orangeSum}
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
          color="#7FFFAA"
          initialValue={greenSum}
          onChange={handleSumChange}
          onClick={handleColorSumClick}
        />
      </div>
      <QuadSum onChange={handleQuadChange} quads={quad} />
    </div>
  );
}

export default App;
