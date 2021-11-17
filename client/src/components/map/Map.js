import React, { useState } from 'react';
import ReactMapGL, {
  GeolocateControl,
  Source,
  Layer,
  Marker,
} from 'react-map-gl';
import './Map.css';
import paw from '../../paw-solid.svg';

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

  // Only rerender markers if data has changed
  // const markers = React.useMemo(
  //   () => {
  //     geojson.features.map((feature) => {
  //       console.log(feature)
  //       < Marker
  //         // key = { city.name }
  //         longitude = { feature.geometry.coordinates[0] }
  //         latitude = { feature.geometry.coordinates[1] }
  //       >
  //       <img src={paw} alt="paw marker" />
  //       </Marker >
  //   }),
  // [geojson.features]
  // });
  // const markers =
  //     geojson.features.map((feature) => {
  //       console.log(feature)
  //       <Marker
  //         // key = { city.name }
  //         longitude = { feature.geometry.coordinates[0] }
  //         latitude = { feature.geometry.coordinates[1] }
  //       >
  //       <img src={paw} alt="paw marker" />
  //       </Marker>
  //   });

  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 9,
      'circle-color': '#E07A5F',
    },
  };

  // // gets click coordinates
  // function onClickMap(evt) {
  //   console.log(evt.lngLat);
  // }

  // display current location (mapbox has this functionality)
  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        width="100%"
        height="100%"
        onViewportChange={(viewport) => setViewport(viewport)}
        // onClick={onClickMap}
      >
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          auto
        />
        {/* {markers} */}
        <Source id="spots" type="geojson" data={geojson}>
          <Layer {...layerStyle} onClick={(e) => console.log(e)} />
        </Source>
      </ReactMapGL>
    </div>
  );
}

export default Map;
