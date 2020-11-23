import React, { useState, FormEvent } from 'react';

import TextField from './TextField';
import DropDown from './DropDown';




const Flexi = ({ onSubmit, config }) => {
  const initialFormData = {};

  const getInitalFormdata = (items) => {
    items.forEach(item => {
      initialFormData[item.name] = '';
      if (item.children) {
        getInitalFormdata(item.children.items);
      }
    });
  };

  getInitalFormdata(config.items);

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmit, setIsSubmitFormData] = useState(false);


  const handleFieldChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    onSubmit([formData]);
   
    setIsSubmitFormData(!isSubmit);
 
  };

  const getFields = (item) => {
    switch (item.type) {
      case "TextField":
        return (
          <TextField
            name={item.name}
            label={item.label}
            value={formData[item.name]}
            onChange={handleFieldChange}
            key={`${item.name}${item.type}`}
          />
        );
      case "DropDown":
        return (
          <DropDown
            name={item.name}
            label={item.label}
            values={(item).values}
            value={formData[item.name]}
            onChange={handleFieldChange}
            key={`${item.name}${item.type}`}
          />
        );
      default:
        return null;
    }
  };

  const renderFlexiFieldData = (config) => {
    return config.items.reduce((fields, item) => {
      fields.push(getFields(item));
      if (item.children) {
        fields.push(...renderFlexiFieldData(item.children));
      }
      return fields;
    }, []);
  };

  const getFieldsdatarender = (formData) => {
      var dataArray = [];
    for (let [key, value] of Object.entries(formData)) {
        dataArray.push({

       key: value
        });
      }
      console.log(dataArray);
  }
  const fields = renderFlexiFieldData(config);

     const tifOptions = [];


    for (let [key, value] of Object.entries(formData)) {
    tifOptions.push(<pre>{key}:{value}</pre> );
     }
  
      
  
  
  return (
     
    <>
      <form className="Flexi" onSubmit={handleSubmit}>
        {fields}
        <input type="submit" value="Submit" />
      </form>
      <div className="Flexi-state">
      { isSubmit ? <div> <p>Component State:</p>
        { tifOptions }
   
</div>: ''}
     </div>
    </>
  );
};

export default Flexi;