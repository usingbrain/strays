import React, { useState } from 'react';
import './AddButton/AddButton.css';
import api from '../ApiService';

function FeedButton() {
  const [clicked, setClicked] = useState(false);

  function newFeeding() {
    api.addFeeding({ spot_id: 1, user_id: 1 });
    // setClicked(true)
    // alert('added new feeding at this location');
    console.log('fed');
  }
  return (
    <div className="btn feed p-4 rounded-lg text-white text-center">
      <button className="font-semibold" onClick={newFeeding}>
        Feed
      </button>
    </div>
  );
}

export default FeedButton;
