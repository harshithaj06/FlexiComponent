import React, { ChangeEvent } from 'react';



const TextField = ({ name, label, onChange, value }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(name, value);
  };

  return (
    <label>
      {label}
      <input type="text" value={value} onChange={handleChange} />
    </label>
  );
};

export default TextField;