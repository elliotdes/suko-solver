import React, { useState } from "react";

const Sum = ({ color, initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(color, newValue);
  };

  return (
    <input
      className="sum"
      type="number"
      value={value}
      onChange={handleChange}
      style={{
        backgroundColor: color,
      }}
    />
  );
};

export default Sum;
