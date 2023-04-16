import React, { Fragment, useState } from 'react';
import Navbar from './Navbar';

const Options = () => {
  const [inputs, setInputs] = useState(Array(10).fill('')); // initialize the state for the 10 input values

  const handleInputChange = (event, index) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted input values:', inputs);
  };

  return (
    <>
    <Navbar/>
    <div className="main-container">


    <div className="options-container">
        <form  id='options-form' onSubmit={handleSubmit} className="options-box">
            <div className="heading-container">
                <h2>Options</h2>
                <textarea className="text-area-input" placeholder="Enter some text..."></textarea>
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
