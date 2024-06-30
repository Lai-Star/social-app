import React, { useState } from 'react';
import Sidebar from '../components/job_posting/Sidebar';
import FeedPart from '../components/job_posting/FeedPart';
import Footer from '../components/job_posting/Footer';
import Navbar from '../components/job_posting/Navbar';
import JobLists from '../components/job_posting/JobLists'; // Ensure the path is correct

export default function JobPosting() {
  const [showFeed, setShowFeed] = useState(true); // state to toggle between components

  return (
    <div className="flex flex-col bg-white blur-none">
      <div className="flex overflow-hidden relative flex-col w-full min-h-full max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="./img/background.jpg"
          className="object-cover absolute inset-0 size-full opacity-70"
        />
        <div className="relative w-full">
          <div className="w-full">
            <div className="model w-full grid grid-cols-3 md:grid-cols-3">
              <Sidebar />
              <div className="md:col-span-2 flex flex-col bg-opacity-75 bg-white">
                <Navbar setShowFeed={setShowFeed} />{' '}
                {/* Pass the state setter to Navbar */}
                {showFeed ? <FeedPart /> : <JobLists />}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
