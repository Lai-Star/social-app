import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import MapPage from './pages/MapPage';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import Meeting from './pages/Meeting';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FirstPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="map" element={<MapPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
