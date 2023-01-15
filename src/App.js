import React, { useState } from "react";
import "./App.css";
import Grid from "./Components/Grid";
import Sum from "./Components/Sum";

function App() {
  const [grid, setGrid] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [colors, setColors] = useState([
    ["#FFA07A", "#87CEFA", "#7FFFAA"],
    ["#87CEFA", "#FFA07A", "#7FFFAA"],
    ["#7FFFAA", "#87CEFA", "#FFA07A"],
  ]);
  const [orangeSum, setOrangeSum] = useState(10);
  const [blueSum, setBlueSum] = useState(20);
  const [greenSum, setGreenSum] = useState(30);

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

  const handleColorChange = (row, col, color) => {
    const newColors = [...colors];
    newColors[row][col] = color;
    setColors(newColors);
    checkSum(grid, color, colorSum[color]);
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Suko Solver</h1>
        <Grid
          grid={grid}
          colors={colors}
          onChange={handleChange}
          onColorChange={handleColorChange}
        ></Grid>
      </header>
      <Sum
        color="#FFA07A"
        initialValue={orangeSum}
        onChange={handleSumChange}
      />
      <Sum color="#87CEFA" initialValue={blueSum} onChange={handleSumChange} />
      <Sum color="#7FFFAA" initialValue={greenSum} onChange={handleSumChange} />
    </div>
  );
}

export default App;
