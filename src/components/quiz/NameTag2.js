import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './NameTag2.css';

const Shape = ({ text, color, backgroundColor }) => {


  return (
    <div style={{ height: '200px', width: '200px', color:color, backgroundColor:backgroundColor }}>
      <h1>{text}</h1>
    </div>
  );
};

Shape.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};


const TextSelector = ({ text, changeText }) => {
  
  return (
    <>
      <input type="text" value={text} onChange={changeText} placeholder='Insert text...'/>
    </>
  );
};

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  changeText: PropTypes.func.isRequired,
};

const ColorSelector = ({ color, backgroundColor, changeColor, changeBackgroundColor }) => {

  return (
    <>
      <div>
        <h3>Text Color:</h3>
        <input type="color" value={color} onChange={changeColor}/>
      </div>
      <div>
        <h3>Background Color:</h3>
        <input type="color" value={backgroundColor} onChange={changeBackgroundColor}/>
      </div>
    </>
  );
};

ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  changeColor: PropTypes.func.isRequired,
  changeBackgroundColor: PropTypes.func.isRequired,
};

const NameTag = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const changeText = ({ target }) => {
    setText(target.value);
  };

  const changeColor = ({ target }) => {
    setColor(target.value);
  };

  const changeBackgroundColor = ({ target }) => {
    setBackgroundColor(target.value);
  };

  return (
    <div className={styles.NameTag}>
      <h1>React Quiz</h1>
      <ColorSelector color={color} backgroundColor={backgroundColor} changeColor={changeColor} changeBackgroundColor={changeBackgroundColor} />
      <TextSelector text={text} changeText={changeText} />
      <Shape text={text} color={color} backgroundColor={backgroundColor}/>
    </div>

  );
};

export default NameTag;
