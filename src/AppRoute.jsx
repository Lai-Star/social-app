import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import MapPage from './pages/MapPage';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import Meeting from './pages/Meeting';
import NotFound from './pages/NotFound';
import Payment from './pages/Payment';
import PostingPicture from './pages/PostingPicture';
import Layout from './components/Layout';
import JobPosting from './pages/JobPosting';
import VideoMeeting from './pages/VideoMeeting';
import Gig from './components/job_posting/Gig';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FirstPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/chat" element={<Chat />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="map" element={<MapPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="payment" element={<Payment />} />
          <Route path="posting-picture" element={<PostingPicture />} />
          <Route path="job-posting" element={<JobPosting />} />
          <Route path="job-posting/:id" element={<Gig />} />
          <Route path="video-meeting" element={<VideoMeeting />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="job-posting" element={<JobPosting />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
