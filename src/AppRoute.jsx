import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import Meeting from './pages/Meeting';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
