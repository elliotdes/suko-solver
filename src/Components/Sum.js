import React, { useState } from "react";

const Sum = ({ color, initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(color, newValue);
  };

  return (
    <div
      style={{
        width: "100px",
        height: "50px",
        display: "inline-block",
      }}
    >
      <input
        type="number"
        value={value}
        onChange={handleChange}
        style={{
          backgroundColor: color,
          width: "50px",
          height: "50px",
          fontSize: "20px",
          textAlign: "center",
        }}
      />
    </div>
  );
};

export default Sum;
