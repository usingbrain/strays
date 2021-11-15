import React, { useState, useEffect } from 'react';
import api from './ApiService';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from './components/map/Map';
import Dashboard from './components/dashboard/Dashboard';

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


  return (
    <div className="App">
      <Map geojson={geojson} />
      <Dashboard />
    </div>
  );
}

export default App;
