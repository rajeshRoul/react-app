import '../styles/TextInput.css';
import React from 'react';

type TextInputPropType = {
  type : string;
  placeholder : string;
  value : string;
  handleChange : any;
}

function TextInput(props : TextInputPropType) {
  const {
    type, placeholder, value, handleChange,
  } = props;
  return (
    <input className="TextInput" type={type} placeholder={placeholder} value={value} onChange={handleChange} />
  );
}

export default TextInput;
