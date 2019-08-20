import React, { useState } from 'react';

const Short = () => {

  const [formatChange, setFormatChange] = useState({
    text: '',
    color: '',
    background: ''
  });

        
  const handleChange = ({ target }) => {
    setFormatChange({ ...formatChange, [target.name]: target.value });
  };
       
  return (
    <>
    <h3>change background</h3>
      <input type="color" name="background" value={formatChange.background} onChange={handleChange}/>
      <div style={{ width: '200px', height: '300px', backgroundColor:formatChange.background }}>
        <input type="text" name="text" value={formatChange.text} onChange={handleChange} placeholder='Add text...' />
        <input type="color" name="color" value={formatChange.color} onChange={handleChange}/>
        <h3>font color</h3>
        
        <h1 style={{ color: formatChange.color }}>{formatChange.text}</h1>
      </div>
    </>
  );
};


export default Short;
