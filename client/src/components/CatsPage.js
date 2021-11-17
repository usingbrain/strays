import React from 'react';
import CatCard from './CatCard';

function CatsPage({ cats }) {
  console.log(cats);
  return (
    <div>
      {cats.map((cat) => {
        return (
          <CatCard
            img={cat.img_url}
            name={cat.name}
            colour={cat.colour}
            // lastFed="needs to be fetched from db"
          />
        );
      })}
    </div>
  );
}

export default CatsPage;
