import React, { useState } from 'react';

import MapPicker from 'react-google-map-picker';

const DefaultLocation = { lat: 10, lng: 106 };
const DefaultZoom = 10;

export default function MapMainContent() {
  const [defaultLocation] = useState(DefaultLocation);

  const [, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  function handleChangeLocation(lat, lng) {
    setLocation({ lat: lat, lng: lng });
  }

  function handleChangeZoom(newZoom) {
    setZoom(newZoom);
  }

  return (
    <>
      <MapPicker
        defaultLocation={defaultLocation}
        zoom={zoom}
        style={{ height: '100vh' }}
        onChangeLocation={handleChangeLocation}
        onChangeZoom={handleChangeZoom}
        apiKey="AIzaSyAkBhTU6Tc8FNdu64ZRG4rPm2bin7H7OOI"
      />
    </>
  );
}
