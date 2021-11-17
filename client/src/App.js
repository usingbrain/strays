import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'mapbox-gl/dist/mapbox-gl.css';

import api from './ApiService';
import { OpenContext } from './OpenContext';
import './App.css';
import Map from './components/map/Map';
import CatsPage from './components/CatsPage';
import Dashboard from './components/dashboard/Dashboard';
import Popup from './components/Popup/Popup';

function App() {
  const [strays, setStrays] = useState([]);
  const [open, setOpen] = useState(false);
  const [geojson, setGeojson] = useState({
    type: 'FeatureCollection',
    features: [],
  });

  useEffect(() => {
    (async function getAll() {
      const fetched = await api.getSpots();
      //iterate through fetched, create array, setGeojson to be that array
      const features = fetched.map((spot) => {
        return {
          type: 'Feature',
          geometry: { type: 'Point', coordinates: [spot.long, spot.lat] },
        };
      });
      setGeojson((prevState) => ({ ...prevState, features }));
    })();
    (async function getAll() {
      const strays = await api.getStrays();
      setStrays(strays);
    })();
  }, []);

  return (
    <div className="App">
      {open && <Popup handleClick={setOpen} />}
      <OpenContext.Provider value={{ open, setOpen }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Map geojson={geojson} />
            </Route>
            <Route path="/cats">
              <CatsPage cats={strays} />
            </Route>
            {/* <Route path="/chats"><Chats /></Route> */}
          </Switch>
          <Dashboard />
        </Router>
      </OpenContext.Provider>
    </div>
  );
}

export default App;
