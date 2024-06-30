import React from 'react';

const VideoMeeting = () => {
  return (
    <div>
      <iframe
        src="http://localhost:5000"
        title="Video Meeting"
        width="100%"
        height="600px"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoMeeting;
