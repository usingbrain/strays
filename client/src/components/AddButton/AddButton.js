import React from 'react';
// import './AddButton.css';

function AddButton({ handleClick, text }) {
  return (
    // on click change state to be <clicked>
    <div className="btn stray p-4 rounded-lg text-white w-1/3  text-center">
      <button className="font-semibold" onClick={() => handleClick(true)}>
        {text}
      </button>
    </div>
  );
}

export default AddButton;
