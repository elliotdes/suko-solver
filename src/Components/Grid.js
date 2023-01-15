import React from "react";

function Square({ value, color, row, col, onChange, onColorChange }) {
  const handleChange = (e) => {
    const value = e.target.value;
    onChange(row, col, value);
  };

  const handleColorChange = (e) => {
    onColorChange(row, col, e.target.value);
  };

  return (
    <div style={{ backgroundColor: color }}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        style={{
          width: "50px",
          height: "50px",
          fontSize: "20px",
          textAlign: "center",
          backgroundColor: color,
        }}
      />
      <select value={color} onChange={handleColorChange}>
        <option value="#FFA07A">pastel-orange</option>
        <option value="#87CEFA">pastel-blue</option>
        <option value="#7FFFAA">pastel-green</option>
      </select>
    </div>
  );
}

const Grid = (props) => {
  let rows = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <Square
          key={i + "-" + j}
          value={props.grid[i][j]}
          color={props.colors[i][j]}
          row={i}
          col={j}
          onChange={props.onChange}
          onColorChange={props.onColorChange}
        />
      );
    }
    rows.push(<div key={i}>{row}</div>);
  }
  return <div className="grid">{rows}</div>;
};

export default Grid;
