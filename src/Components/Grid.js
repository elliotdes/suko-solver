import React from "react";

function Square({ value, color, row, col, onChange, onColorChange }) {
  const handleChange = (e) => {
    const value = e.target.value;
    onChange(row, col, value);
  };

  const handleColorChange = (e) => {
    onColorChange(row, col, e.target.value);
  };

  const openColorPicker = (e) => {
    e.preventDefault();
    // code to open color picker or predefined color menu here
  };

  return (
    <td onContextMenu={openColorPicker}>
      <input
        className="square"
        type="number"
        value={value}
        onChange={handleChange}
        style={{
          backgroundColor: color,
        }}
      />
      <select value={color} onChange={handleColorChange}>
        <option value="#FFA07A">pastel-orange</option>
        <option value="#87CEFA">pastel-blue</option>
        <option value="#7FFFAA">pastel-green</option>
      </select>
    </td>
  );
}

const Grid = (props) => {
  return (
    <table className="grid">
      <tbody>
        {props.grid.map((row, i) => (
          <tr key={i}>
            {row.map((col, j) => (
              <Square
                key={j}
                value={props.grid[i][j]}
                color={props.colors[i][j]}
                row={i}
                col={j}
                onChange={props.onChange}
                onColorChange={props.onColorChange}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Grid;
