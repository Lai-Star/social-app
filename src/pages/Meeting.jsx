import React from 'react';
import Navbar from '../components/Navbar';
import MainScreen from '../components/meeting/MainScreen';
import Sidebar from '../components/Sidebar';
import MeetinDetail from '../components/meeting/MeetinDetail';

export default function Meeting() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />
      {/* End Header */}

      {/* Chatting */}
      <div className="flex flex-1 flex-row justify-between bg-white">
        {/* Left Sidebar */}
        <Sidebar />
        {/* End Left Sidebar */}

        {/* Meeting Main Screen */}
        <MainScreen />
        {/* End Meeting Main Screen */}

        <MeetinDetail />
      </div>
    </div>
  );
}
