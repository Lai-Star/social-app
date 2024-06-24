import React from 'react';
import MainScreen from '../components/meeting/MainScreen';
import Sidebar from '../components/Sidebar';
import MeetinDetail from '../components/meeting/MeetinDetail';

export default function Meeting() {
  return (
    <div className="min-h-screen flex flex-col">
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
