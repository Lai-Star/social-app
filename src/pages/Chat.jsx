import React from 'react';
import Chatdetail from '../components/messages/Chatdetail';
import Chatlist from '../components/messages/Chatlist';
import Messagebox from '../components/messages/Messagebox';

export default function Chat() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Chatting */}
      <div className="flex flex-1 flex-row justify-between bg-white">
        {/* Chat list */}
        <Chatlist />
        {/* End Chat list */}

        {/* Message */}
        <Messagebox />
        {/* End Message */}

        <Chatdetail />
      </div>
    </div>
  );
}
