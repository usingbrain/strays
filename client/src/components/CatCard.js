import React from 'react';

function CatCard({ name, colour, img }) {
  console.log('coming into cards!');
  return (
    <div className="flex flex-row justify-start p-3">
      <img className="w-24 mr-5" src={img} alt="a cat" />
      <div>
        <h2 className="font-bold">{name}</h2>
        <p>{colour}</p>
        {/* <p>last fed: {lastFed}</p> */}
      </div>
    </div>
  );
}

export default CatCard;
