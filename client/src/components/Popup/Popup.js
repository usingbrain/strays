import React from 'react';
import AddStray from '../AddStray';
import './Popup.css';
import api from '../../ApiService';

function Popup({ handleClick }) {
  return (
    <div className="pop">
      <button onClick={() => handleClick(false)}>X</button>
      <AddStray addStrayToDB={api.addStray} />
    </div>
    // <div className="pop">
    //   <button onClick={() => handleClick(false)}>X</button>
    //   <AddFeeding addFeedingToDB={api.addFeeding} />
    // </div>
  );
}

export default Popup;
