import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';

import api from './ApiService';
import './App.css';
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
    type: 'FeatureCollection',
    features: [],
  };

  spots.forEach((spot) =>
    geojson.features.push({
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [spot.long, spot.lat] },
    })
  );

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Map geojson={geojson} />
          </Route>
          <Route path="/cats">{/* <Cats /> */}</Route>
          <Route path="/chats">{/* <Chats /> */}</Route>
        </Switch>
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
