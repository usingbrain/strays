import React, { useState } from 'react';
import ReactMapGL, { GeolocateControl, Source, Layer } from 'react-map-gl';
import './Map.css';

function Map({ geojson }) {
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
  function geoError(error) {
    console.error('Error code ' + error.code + ': ' + error.message);
  }

  const [viewport, setViewport] = useState({
    latitude: startPosition.lat,
    longitude: startPosition.long,
    zoom: 12,
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  } else {
    console.log('Geolocation API Not Supported');
    // 52.5075, 13.3781 - codeworks Berlin
    startPosition.lat = 52.5075;
    startPosition.long = 13.3781;
  }

  const geolocateControlStyle = {
    right: 10,
    bottom: 50,
  };

  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 5,
      'circle-color': '#007cbf',
    },
  };

  // gets click coordinates
  function onClickMap(evt) {
    console.log(evt.lngLat);
  }

  // display current location (mapbox has this functionality)
  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        width="100%"
        height="100%"
        onViewportChange={(viewport) => setViewport(viewport)}
        onClick={onClickMap}
      >
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          auto
        />
        <Source id="spots" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
      </ReactMapGL>
    </div>
  );
}

export default Map;
