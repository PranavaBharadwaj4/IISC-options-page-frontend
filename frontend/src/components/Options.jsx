import React, { Fragment, useState } from 'react';
import Navbar from './Navbar';

const Options = () => {
  const [inputs, setInputs] = useState(Array(10).fill('')); 
  const [textAreaInput, setTextAreaInput] = useState('');

  const handleInputChange = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };
  const handleTextAreaChange = (event) => {
    setTextAreaInput(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted input values(01-10):', inputs, 'Text Area Value Submitted: ', textAreaInput);
  };

  return (
    <>
    <Navbar/>
    <div className="main-container">


    <div className="options-container">
        <form  id='options-form' onSubmit={handleSubmit} className="options-box">
            <div className="heading-container">
                <h2>Options</h2>
                <textarea
                className="text-area-input"
                placeholder={textAreaInput ? textAreaInput : "Enter some text..."}
                value={textAreaInput}
                onChange={handleTextAreaChange}
              />
            </div>
            <div className="inputs-container">
                {inputs.map((inputValue, index) => (
                <input
                    key={`input-${index}`}
                    type="text"
                    placeholder={`Input ${index + 1}`}
                    value={inputValue}
                    onChange={(event) => handleInputChange(event, index)}
                />
                ))}
            </div>
        </form>
    </div>
        <button form='options-form' className='main-btn' type="submit">Submit</button>
    </div>
    </>
  );
};

export default Options;
