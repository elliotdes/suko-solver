import React, { useState } from "react";
import "./App.css";
import Grid from "./Components/Grid";

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

  const handleChange = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  const handleColorChange = (row, col, color) => {
    const newColors = [...colors];
    newColors[row][col] = color;
    setColors(newColors);
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
    </div>
  );
}

export default App;
