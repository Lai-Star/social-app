import React from 'react';
import LocationDetails from '../components/map/LocationDetails';
import MapSidebar from '../components/map/MapSidebar';
import MapMainContent from '../components/map/MapMainContent';
import MapSearchNavbar from '../components/map/MapSearchNavbar';

const MapPage = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <LocationDetails />
      <MapSearchNavbar />
      <div className="flex flex-grow relative">
        <MapSidebar />
        <MapMainContent />
      </div>
    </div>
  );
};

export default MapPage;
