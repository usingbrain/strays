import React, { useState } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import './Map.css';

function Map({geojson}) {
  let startPosition = {};

  function geoSuccess(position) {
    startPosition.lat = parseFloat(position.coords.latitude);
    startPosition.long = parseFloat(position.coords.longitude);
    setViewport({
      latitude: startPosition.lat,
      longitude: startPosition.long,
      zoom: 12,
    });
  }

  const [viewport, setViewport] = useState({
    latitude: startPosition.lat,
    longitude: startPosition.long,
    zoom: 12,
  });
  function geoError(error) {
    console.error('Error code ' + error.code + ': ' + error.message);
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  } else {
    console.log('Geolocation API Not Supported');
    // 52.5075, 13.3781 - codeworks Berlin
    startPosition.lat = 52.5075;
    startPosition.long = 13.3781;
  }

  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': '#007cbf',
    },
  };

  // frontend is not accessing .env right now. This works when token is put in directly

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        width="100%"
        height="100%"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <Source id="spots" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
      </ReactMapGL>
    </div>
  );
}

export default Map;
