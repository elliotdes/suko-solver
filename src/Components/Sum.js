import React, { useState } from "react";

const Sum = ({ color, initialValue, onChange, onClick }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(color, newValue);
  };

  const handleClick = () => {
    onClick(color);
  };

  return (
    <input
      className="sum"
      type="number"
      value={value}
      onChange={handleChange}
      onClick={handleClick}
      style={{
        backgroundColor: color,
      }}
    />
  );
};

export default Sum;
