import React from 'react';
import './AddButton.css';

function AddButton({ handleClick, text }) {
  return (
    // on click change state to be <clicked>
    <div className="btn">
      <button onClick={() => handleClick(true)}>{text}</button>
    </div>
  );
}

export default AddButton;
