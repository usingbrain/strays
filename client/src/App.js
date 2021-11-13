import React, { useState, useEffect } from 'react';
import api from './ApiService';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from './components/map/Map';

function App() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    (async function getAll() {
      const spots = await api.getSpots();
      setSpots(spots);
    })();
  }, []);

  const geojson = {
    "type": "FeatureCollection",
    "features": [],
  };


  spots.forEach((spot) =>
    geojson.features.push({
      "type": "Feature",
      "geometry": { "type": "Point", "coordinates": [spot.long, spot.lat] },
    })
  );
  console.log('geojson: ', geojson);



  return (
    <div className="App">
      <Map geojson={geojson} />
      <p>app works</p>
    </div>
  );
}

export default App;
