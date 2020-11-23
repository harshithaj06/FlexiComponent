import React, { ChangeEvent } from 'react';



const DropDown = ({ name, label, values, onChange, value }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(name, value);
  };

  return (
    <label>
      {label}
      <select value={value} onChange={handleChange}>
        <option value={''} disabled>
          Choose {label}
        </option>
        {values.map(value => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
};

export default DropDown;